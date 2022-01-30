import React,{useState} from "react";
import DateTimePicker from "react-native-modal-datetime-picker";
import {connect} from 'react-redux';
import {addAlarm} from '../actions/alarms';
import ReactNativeAN from 'react-native-alarm-notification';
import { View,Text,Button,Alert } from "react-native";

const TimePicker = (props)=>{
    const[isDateTimePickerVisible,setIsDateTimePickerVisible]=useState(false);
    const makeid=()=>{
        var length = 5;
        var result = "";
        var characters = "0123456789";
        var charactersLength = characters.length;
        for(var i = 0; i<length; i++){
            result+= characters.charAt(Math.floor(Math.random()+charactersLength));
        }
        return result;

    }


    const showDateTimePicker =()=>{
        setIsDateTimePickerVisible(true);
    }
    const hideDateTimePicker =()=>{
        setIsDateTimePickerVisible(false);
    }
    const handleDatePicker=(datetime)=>{
        var currentTime = Date.now();
        if(datetime.getTime()<currentTime){
            Alert.alert("Please choose a future time");
            hideDateTimePicker();
            return;
        
        }
    const fireDate=ReactNativeAN.parseDate(datetime);    
    const alarmNotifData={
        id: makeid(),
        title: "Alarm ringing",
        message:"My notification message",
        channel: "alarm-channel",
        ticker: "My Notification message",
        auto_cancel: true,
        vibrate:true,
        vibration:100,
        small_icon:"ic_launcher",
        large_icon:"ic_launcher",
        play_sound: true,
        sound_name: null,
        color: "red",
        schedule_once: true,
        tag:"some_tag",
        fire_date: Date.now(),
        date:{value:datetime}

    
    } 
        this.props.add(alarmNotifData);
        ReactNativeAN.scheduleAlarm(alarmNotifData);
        this.hideDateTimePicker();
    }
    
    return(
        <>
        <Button
        title="+"
        onPress={()=>{
            showDateTimePicker();

        }}/>
        <DateTimePicker
        mode= 'datetime'
        isVisible={isDateTimePickerVisible}
        onConfirm={handleDatePicker}
        onCancel={hideDateTimePicker} />
        </>
          
    );
}

const mapStateToProps = state =>{
    return{};
}
const mapDispatchToProps = dispatch =>{
    return{
        add:alarmNotifObj=>{
            dispatch(addAlarm(alarmNotifObj));
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(TimePicker);
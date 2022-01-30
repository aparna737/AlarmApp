import React, {useState} from "react";
import { FlatList, StyleSheet, Text, View, Button, Switch,ToastAndroid} from "react-native";
import {ListItem} from "react-native-elements";
import {connect} from 'react-redux';
import {deleteAlarm} from '../actions/alarms';
import ReactNativeAN from 'react-native-alarm-notification';

const ListAlarms = (props)=>{
    const keyExtractor = (item ,index)=>index.toString();
    const renderItem = ({item})=>{
        return(
           
            <ListItem>
                <ListItem.Content>
                    <ListItem.Title style={styles.titleStyle}>{item.time.toString()}</ListItem.Title>
                    <ListItem.Subtitle>{item.date.toString()}</ListItem.Subtitle>
                </ListItem.Content>
                <Switch 
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style = {{transform: [{scaleX: 2.3}, {scaleY: 2.1}], marginRight:"8%"}}
                />
                <Button
                    title="-"
                    onPress={e=>{
                        ReactNativeAN.deleteAlarm(item.alarmNotifData.id);
                        ReactNativeAN.stopAlarmSound();
                        this.props.delete(item.value);
                    }}
                    />
            </ListItem> 
             
        );
    }
    
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        if (!isEnabled){
            ToastAndroid.show('Alarm is set',ToastAndroid.SHORT);
        }
        setIsEnabled (previousState => !previousState)
    }
    return(
        <FlatList 
            keyExtractor={keyExtractor}
            date={props.alarms}
            renderItem={renderItem}
        />
    );
}

const mapStateToProps = state =>{
    return{
        alarms:state.alarms.alarms,
    };
}
const mapDispatchToProps = dispatch =>{
    return{
        delete: value=>{
            dispatch(deleteAlarm(value));
        }
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(ListAlarms);


const styles=StyleSheet.create({
    titleStyle:{
        fontWeight:'700',
        fontSize:30,
    }
})
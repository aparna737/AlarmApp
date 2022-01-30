import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListAlarms from '../components/ListAlarms';
import TimePicker from '../components/TimePicker';
const AlarmScreen = ({navigation})=> {
    return(
        <View style = {styles.container}>
            <Text style={styles.heading}>
                Alarm
            </Text>
            <SafeAreaView style={styles.timePicker}>
                <TimePicker/>
            </SafeAreaView>
            
            <SafeAreaView style={styles.listAlarms}>
                <ListAlarms/>
            </SafeAreaView>
            

        </View>
    );
};

export default AlarmScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF',
        fontSize:3

    },
    heading:{
        fontSize:25,
        padding:20
    },
    timePicker:{
        paddingTop:"10%",
        width: "70%",
        paddingBottom:"90%",
        alignItems:'flex-end',
    },
    listAlarms:{
        flex:1,
        width:"100%"

    }
    
});
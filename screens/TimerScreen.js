import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

const TimerScreen = ({navigation})=> {
    return(
        <View style = {StyleSheet.container}>
            <Text>
                TimerScreen
            </Text>

        </View>
    );
};

export default TimerScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF',
        fontSize:3
    },
});
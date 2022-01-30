import React from 'react';
import {View,Text, StyleSheet} from 'react-native';

const StopwatchScreen = ({navigation})=> {
    return(
        <View style = {StyleSheet.container}>
            <Text>
                StopwatchScreen
            </Text>

        </View>
    );
};

export default StopwatchScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF',
        fontSize:3
    },
});
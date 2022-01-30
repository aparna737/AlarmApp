import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AlarmScreen from "../screens/AlarmScreen";
import StopwatchScreen from "../screens/StopwatchScreen";
import TimerScreen from "../screens/TimerScreen";
import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();
const Tabs = ()=> {
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    paddingVertical: 20,
                    alignItems:'center',
                    height: 70,
                    backgroundColor: "#FFFFFF",
                    position: 'absolute',
                    borderRadius: 15,
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                
                    paddingBottom: 0,
                    ...styles.shadow
    
                },
                
                tabBarLabelStyle:{
                    fontSize:20,
                    fontWeight:"500"
                    
                    
                    
    
                }
                
                
            }}
            

                
        >
            <Tab.Screen name= "Alarm" component={AlarmScreen} options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image
                        source={require('../assets/alarm-clock.png')}
                        resizeMode = 'contain'
                        style = {{
                            width: 25,
                            height: 25,
                            tintColor:focused?'#375FEA':'#A8AAAF'
                        }}>
                        </Image>
                        <Text style={{color: focused? '#375FEA':'#A8AAAF', fontSize:15}}>
                            
                        </Text>
                    </View>
                )
            
            }}/>
            <Tab.Screen name= "Stopwatch" component={StopwatchScreen}options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image
                        source={require('../assets/stopwatch.png')}
                        resizeMode = 'contain'
                        style = {{
                            width: 25,
                            height: 25,
                            tintColor:focused?'#375FEA':'#A8AAAF'
                        }}>
                        </Image>
                        <Text style={{color: focused? '#375FEA':'#A8AAAF', fontSize:15}}>
                            
                        </Text>
                    </View>
                )
            
            }}/>
            <Tab.Screen name= "Timer" component={TimerScreen}options={{
                tabBarIcon:({focused})=>(
                    <View style={{alignItems:'center',justifyContent:'center',top:10}}>
                        <Image
                        source={require('../assets/timer.png')}
                        resizeMode = 'contain'
                        style = {{
                            width: 25,
                            height: 25,
                            tintColor:focused?'#375FEA':'#A8AAAF'
                        }}>
                        </Image>
                        <Text style={{color: focused? '#375FEA':'#A8AAAF', fontSize:15}}>
                            
                        </Text>
                    </View>
                )
            
            }}/>

        </Tab.Navigator>

    );
}
const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7F5DF0',
        shadowOffset:{
            width: 0,
            height: 30
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
})
export default Tabs;
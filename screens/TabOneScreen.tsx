import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { IconButton, Colors } from 'react-native-paper';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

//APP
const App = () => {
  return (
    <View></View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  Title:{
    fontSize:25,
    color: '#fff',
    alignSelf: 'center',
    alignContent: 'center',
    fontWeight: 'bold',
    
},  


  stack: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'red',
    color: 'orange',
  },

});

export default App;
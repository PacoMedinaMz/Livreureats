/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { Entypo } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Componentes
import Home from '../screens/Home';
import HomeRest from '../screens/HomeRest';
import Orden from '../screens/Orden';
import Restaurant from '../screens/Restaurant';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "gray",
        showLabel: false,
        style: {
          borderTopColor: "gray",
          backgroundColor: '#FF6347',
          elevation: .5,
        }
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          
          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={24} color={focused ? "#fff" : '#A8A8A8'} />),          
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="food-fork-drink" size={24} color={focused ? "#fff" : '#A8A8A8'} />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={Home}
        options={{
          headerTitle: () => (
            <View style={styles.Title}><Text style={styles.Title}>Livreureats</Text></View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <IconButton
                icon="account"
                size={28}
                color="#fff"
              // onPress={()=>navigation.openDrawer()}
              />
            </View>

          ),
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <IconButton
                icon="menu"
                // name="menu"
                size={28}
                color="#fff"
              // onPress={()=>navigation.openDrawer()}
              />
            </View>

          ),
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center'
          },
          headerStyle: {
            backgroundColor: '#FF6347'
          }
        }} />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={Restaurant}
        options={{
          headerTitle: () => (
            <View style={styles.Title}><Text style={styles.Title}>Livreureats</Text></View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <IconButton
                icon="account"
                size={28}
                color="#fff"
              // onPress={()=>navigation.openDrawer()}
              />
            </View>

          ),
          headerLeft: () => (
            <View style={{ marginLeft: 10 }}>
              <IconButton
                icon="menu"
                // name="menu"
                size={28}
                color="#fff"
              // onPress={()=>navigation.openDrawer()}
              />
            </View>

          ),
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center'
          },
          headerStyle: {
            backgroundColor: '#FF6347'
          }
        }} />
    </TabTwoStack.Navigator>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Title: {
    fontSize: 25,
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
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import useColorScheme from '../hooks/useColorScheme';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import { Entypo } from '@expo/vector-icons';
import { IconButton } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Componentes
import Home from '../screens/Pantallas/Home';
import Restaurant from '../screens/Pantallas/Restaurant';
import Signin from '../screens/Pantallas/Signin';
import Comrapida from '../screens/Pantallas/Comrapida';
import Postres from '../screens/Pantallas/Postres';
import Bebidas from '../screens/Pantallas/Bebidas';
import Menurest from '../screens/Pantallas/Menurest';
import Menucomida from '../screens/Pantallas/Menucomida';
import GraficasScreen from '../screens/Graficas/GraficasScreen';
import Opciones from '../screens/Pantallas/Opciones';
import Orden from '../screens/Pantallas/Orden';



const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator({ navigation }: { navigation: any }) {
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
        name="Opciones"
        component={Opciones}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="settings" size={24} color={focused ? "#fff" : '#A8A8A8'} />

          )
        }}
      />

      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{

          tabBarIcon: ({ focused }) => (
            <Entypo name="home" size={24} color={focused ? "#fff" : '#A8A8A8'} />),
        }}
      />
      <BottomTab.Screen
        name="Graphs"
        component={GraficasScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="area-graph" size={24} color={focused ? "#fff" : '#A8A8A8'} />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator({ navigation }: { navigation: any }) {
  return (
    <TabOneStack.Navigator>
      {/* Config Tab Home */}
      <TabOneStack.Screen
        name="Home"
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
                onPress={() => navigation.navigate("Signin")}
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

      {/* Config Tab Restaurant */}
      <TabOneStack.Screen
        name="Restaurant"
        component={Restaurant}
        options={{
          headerTitle: () => (
            <View style={styles.TitleAlt}><Text style={styles.Title}>Livreureats</Text></View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>

              <IconButton
                icon="account"
                size={28}
                color="#fff"
                onPress={() => navigation.navigate("Signin")}
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

      {/* Config Tab Restaurant */}
      <TabOneStack.Screen
        name="Signin"
        component={Signin}
        options={{
          headerTitle: () => (
            <View style={styles.TitleAlt}><Text style={styles.Title}>Livreureats</Text></View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>

              <IconButton
                icon="account"
                size={28}
                color="#fff"
                onPress={() => navigation.navigate("Signin")}
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

      {/* Config Tab Orden*/}
      <TabOneStack.Screen
        name="Orden"
        component={Orden}
        options={{
          headerTitle: () => (
            <View style={styles.TitleAlt}><Text style={styles.Title}>Livreureats</Text></View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>

              <IconButton
                icon="account"
                size={28}
                color="#fff"
                onPress={() => navigation.navigate("Signin")}
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

      {/* Config Tab Comida Rapida */}
      <TabOneStack.Screen
        name="Comrapida"
        component={Comrapida}
        options={{
          headerTitle: () => (
            <View style={styles.TitleAlt}><Text style={styles.Title}>Livreureats</Text></View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>

              <IconButton
                icon="account"
                size={28}
                color="#fff"
                onPress={() => navigation.navigate("Signin")}
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



      {/* Config Tab Postres */}
      <TabOneStack.Screen
        name="Postres"
        component={Postres}
        options={{
          headerTitle: () => (
            <View style={styles.TitleAlt}><Text style={styles.Title}>Livreureats</Text></View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>

              <IconButton
                icon="account"
                size={28}
                color="#fff"
                onPress={() => navigation.navigate("Signin")}
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

      {/* Config Tab Bebidas */}
      <TabOneStack.Screen
        name="Bebidas"
        component={Bebidas}
        options={{
          headerTitle: () => (
            <View style={styles.TitleAlt}><Text style={styles.Title}>Livreureats</Text></View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>

              <IconButton
                icon="account"
                size={28}
                color="#fff"
                onPress={() => navigation.navigate("Signin")}
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

      {/* Config Tab Menu comida */}
      <TabOneStack.Screen
        name="Menucomida"
        component={Menucomida}
        options={{
          headerTitle: () => (
            <View style={styles.TitleAlt}><Text style={styles.Title}>Livreureats</Text></View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>

              <IconButton
                icon="account"
                size={28}
                color="#fff"
                onPress={() => navigation.navigate("Signin")}
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

      {/* Config Tab Menu restaurantes */}
      <TabOneStack.Screen
        name="Menurest"
        component={Menurest}
        options={{
          headerTitle: () => (
            <View style={styles.TitleAlt}><Text style={styles.Title}>Livreureats</Text></View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 10 }}>

              <IconButton
                icon="account"
                size={28}
                color="#fff"
                onPress={() => navigation.navigate("Signin")}
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
    </TabOneStack.Navigator >
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator({ navigation }: { navigation: any }) {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Signin"
        component={Signin}
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
                onPress={() => navigation.navigate("Signin")}
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
    marginLeft: 25,
  },

  TitleAlt: {
    fontSize: 25,
    color: '#fff',
    alignSelf: 'center',
    alignContent: 'center',
    fontWeight: 'bold',
    marginRight: 25,
  },


  stack: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'red',
    color: 'orange',
  },

});
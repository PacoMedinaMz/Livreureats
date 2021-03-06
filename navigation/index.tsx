import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import GraficasScreen from "../screens/Graficas/GraficasScreen";

import NotFoundScreen from "../screens/NotFoundScreen";
import Bebidas from "../screens/Pantallas/Bebidas";
import Comrapida from "../screens/Pantallas/Comrapida";
import Home from "../screens/Pantallas/Home";
import HomeRest from "../screens/Pantallas/HomeRest";
import Menucomida from "../screens/Pantallas/Menucomida";
import Menurest from "../screens/Pantallas/Menurest";
import Opciones from "../screens/Pantallas/Opciones";
import Orden from "../screens/Pantallas/Orden";
import Postres from "../screens/Pantallas/Postres";
import Restaurant from "../screens/Pantallas/Restaurant";
import Signin from "../screens/Pantallas/Signin";
import Login from "../screens/Pantallas/Login";
import { RootStackParamList } from "../types";
import BottomTabNavigator from "./BottomTabNavigator";
import LinkingConfiguration from "./LinkingConfiguration";
import SigninRest from "../screens/Pantallas/SigninRest";
import Buscar from "../screens/Pantallas/Buscar";
import CrudPersonal from "../screens/Pantallas/CrudPersonal";
import CrudProductos from "../screens/Pantallas/CrudProductos";
import Carrito from "../screens/Pantallas/Carrito";

//Productos
import altaProducto from "../screens/CRUD/altaProducto";
import BajaProducto from "../screens/CRUD/bajaProducto";
import conProducto from "../screens/CRUD/conProducto";
import actProducto from "../screens/CRUD/actProducto";
import altaPersonal from "../screens/CRUDPersonal/altaPersonal";
import BajaPersonal from "../screens/CRUDPersonal/bajaPersonal";
import conPersonal from "../screens/CRUDPersonal/conPersonal";
import actPersonal from "../screens/CRUDPersonal/actPersonal";

//Personal


export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="Graficas" component={GraficasScreen} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
      <Stack.Screen name="Orden" component={Orden} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Comrapida" component={Comrapida} />
      <Stack.Screen name="Postres" component={Postres} />
      <Stack.Screen name="Bebidas" component={Bebidas} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeRest" component={HomeRest} />
      <Stack.Screen name="Menurest" component={Menurest} />
      <Stack.Screen name="Menucomida" component={Menucomida} />
      <Stack.Screen name="Opciones" component={Opciones} />  
      <Stack.Screen name="SigninRest" component={SigninRest} />  
      <Stack.Screen name="Buscar" component={Buscar} />  
      <Stack.Screen name="CrudPersonal" component={CrudPersonal} /> 
      <Stack.Screen name="CrudProductos" component={CrudProductos} /> 
      <Stack.Screen name="Carrito" component={Carrito} /> 
      <Stack.Screen name="altaP" component={altaProducto} /> 
      <Stack.Screen name="bajaP" component={BajaProducto} /> 
      <Stack.Screen name="consP" component={conProducto} /> 
      <Stack.Screen name="actP" component={actProducto} /> 
      <Stack.Screen name="altaPer" component={altaPersonal} /> 
      <Stack.Screen name="bajaPer" component={BajaPersonal} /> 
      <Stack.Screen name="consPer" component={conPersonal} /> 
      <Stack.Screen name="actPer" component={actPersonal} /> 
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

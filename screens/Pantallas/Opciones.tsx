import React from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import InputMessage from "../../components/Chat/InputMessage";
import Mensaje from "../../components/Chat/Mensaje";

let mensajes: any = [
  {
    autor: "Administrador",
    texto: "Para servirte.",
    fecha: "9:27 p.m",
  },
  {
    autor: "Rodrigo",
    texto: "Gracias",
    fecha: "9:27 p.m",
  },
  {
    autor: "Administrador",
    texto: "Muy bien Rodrigo. Si gustas algo no olvides contactarnos.",
    fecha: "9:27 p.m",
  },
  {
    autor: "Rodrigo",
    texto: "Nada solamente estoy viendo",
    fecha: "9:27 p.m",
  },
  {
    autor: "Administrador",
    texto: "Buen día. ¿En qué te podemos ayudar?",
    fecha: "9:27 p.m",
  },
  {
    autor: "Rodrigo",
    texto: "Hola soy un mensaje",
    fecha: "9:27 p.m",
  },
];

const Opciones = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stack}>
        <Text style={styles.Title}>Soporte en vivo</Text>
      </View>

      <View style={{ width: "100%", paddingTop: 32 }}>
        <InputMessage
          onSubmit={(text: string) => {
            console.log(text);
          }}
        />
      </View>

      <ScrollView
        style={{
          width: "100%",
          paddingTop: 50,
        }}
      >
        {mensajes &&
          mensajes.map((msg: any, i: number) => {
            return [<Mensaje mensaje={msg} key={i} />];
          })}
      </ScrollView>
    </View>
  );
};

export default Opciones;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
  },

  Title: {
    fontSize: 25,
    alignSelf: "center",
    alignContent: "center",
    fontWeight: "bold",
    color: "#fff",
  },

  stack: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: 430,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: "#FF6347",
    paddingTop: 43,
    paddingBottom: 10,
  },
});

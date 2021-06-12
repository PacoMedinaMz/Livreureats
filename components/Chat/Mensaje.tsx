import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Mensaje(props: any) {
  let nombreDispositivo: string = "Rodrigo";

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.fecha,
          {
            alignSelf:
              nombreDispositivo === props.mensaje.autor
                ? "flex-end"
                : "flex-start",
          },
        ]}
      >
        {props.mensaje.fecha}
      </Text>
      <View
        style={[
          styles.mensaje,
          nombreDispositivo === props.mensaje.autor
            ? styles.mensajeYo
            : styles.mensajeEl,
        ]}
      >
        <Text style={styles.autor}>
          {props.mensaje.autor + ": "}
          <Text style={styles.text}>{props.mensaje.texto}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  fecha: {
    fontSize: 8,
    color: "gray",
    padding: 2,
  },
  mensaje: {
    width: "auto",
    maxWidth: "80%",
    padding: 10,
    borderRadius: 10,
  },
  mensajeYo: {
    backgroundColor: "#056162",
    alignSelf: "flex-end",
  },
  mensajeEl: {
    backgroundColor: "gray",
    flex: 1,
    alignSelf: "flex-start",
  },
  autor: {
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontWeight: "normal",
  },
});

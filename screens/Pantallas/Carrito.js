import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
} from "react-native-paper";
import { items, removeItem } from "../../global/Carrito";

const Carrito = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* MENU */}
      <View>
        <Text style={styles.Title}>CARRITO</Text>

        <View style={{ width: "100%", height: "100%" }}>
          {items.map((item, i) => {
            return [
              <Text
                key={i}
                onPress={() => {
                  removeItem(item.id);
                  alert("Removido, se debe actualizar la pantalla acá");
                }}
              >
                {item.title} (click para remover)
              </Text>,
            ];
          })}
        </View>
      </View>
    </View>
  );
};

export default Carrito;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  Title: {
    fontSize: 30,
    alignSelf: "center",
    alignContent: "center",
    marginTop: 20,
    fontWeight: "bold",
    color: "#FF8400",
  },
});

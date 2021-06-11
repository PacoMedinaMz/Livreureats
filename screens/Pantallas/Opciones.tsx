import React from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import InputMessage from "../../components/Chat/InputMessage";

const Opciones = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stack}>
        <Text style={styles.Title}>Soporte en vivo</Text>
      </View>

      <ScrollView
        style={{
          width: "100%",
        }}
      >
        <InputMessage
          onSubmit={(text: string) => {
            console.log(text);
          }}
        />
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

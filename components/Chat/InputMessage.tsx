import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { Text, View } from "../../components/Themed";

export default function InputMessage(props: any) {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(foo: any) => {
          setText(foo);
        }}
        value={text}
        placeholder={"Escribe algo..."}
        keyboardType={"default"}
        style={{
          width: "80%",
        }}
        returnKeyType="next"
      />

      <TouchableOpacity
        onPress={() => {
          props.onSubmit(text);
          setText("");
        }}
        style={{
          width: "20%",
          backgroundColor: "green",
          alignSelf: "center",
          alignContent: "center",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            width: "100%",
            color: "#fff",
            textAlign: "center",
            paddingTop: 15,
            paddingBottom: 8,
            fontWeight: "bold",
            fontSize: 17,
          }}
        >
          Enviar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row",
  },
});

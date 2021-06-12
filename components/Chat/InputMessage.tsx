import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { Text, View } from "../../components/Themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
          backgroundColor: "transparent",
        }}
        returnKeyType="next"
        onFocus={() => props.onFocus()}
        onTouchStart={() => props.onFocus()}
        selectionColor="#FF6347"
        underlineColorAndroid="#C4C4C4"
      />

      <TouchableOpacity
        onPress={() => {
          props.onSubmit(text);
          setText("");
        }}
        style={{
          width: "20%",
          backgroundColor: "transparent",
        }}
      >
        <View
          style={{
            backgroundColor: "green",
            alignSelf: "center",
            alignContent: "center",
            alignItems: "center",
            padding: 10,
            borderRadius: 100,
          }}
        >
          <MaterialCommunityIcons
            size={30}
            name="send"
            style={{
              color: "white",
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0E0E0",
    alignItems: "center",
    flexDirection: "row",
  },
});

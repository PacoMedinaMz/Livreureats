import React from "react";
import { Text, StyleSheet } from "react-native";
import { View } from "../Themed";

export default function FechaButton(props: any) {
  return (
    <View
      style={{
        width: "25%",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <Text
        style={[
          styles.btnFecha,
          props.selected === props.id ? styles.btnSelected : {},
        ]}
        onPress={() => {
          props.onPress();
          props.setSelected(props.id);
        }}
      >
        {props.text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btnFecha: {
    color: "#ADB4C6",
    fontWeight: "bold",
    backgroundColor: "transparent",
    width: "100%",
    textAlign: "center",
  },
  btnSelected: {
    backgroundColor: "#ADB7C3",
    color: "white",
    borderRadius: 10,
  },
});

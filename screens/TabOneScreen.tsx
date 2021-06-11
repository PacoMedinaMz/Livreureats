import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

//APP
const App = () => {
  return <View></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  Title: {
    fontSize: 25,
    color: "#fff",
    alignSelf: "center",
    alignContent: "center",
    fontWeight: "bold",
  },

  stack: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "red",
    color: "orange",
  },
});

export default App;

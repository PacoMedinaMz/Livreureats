import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";

export default function GraficasScreen({ path }: { path: string }) {
  return (
    <View style={styles.container}>
      <Text>Open up the code for this screen:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: 50,
  },
});

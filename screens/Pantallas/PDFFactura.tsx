import React from "react";

import { Platform, Text, TouchableHighlight, View } from "react-native";

import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";

export default function PDFFactura(props: any) {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pdf Content</title>
        <style>
            body {
                font-size: 16px;
                color: rgb(255, 196, 0);
            }

            h1 {
                text-align: center;
            }
        </style>
    </head>
    <body>
        <h1>Hello, UppLabs!</h1>
    </body>
    </html>
`;

  async function createPDF() {
    try {
      const { uri } = await Print.printToFileAsync({
        html: htmlContent,
        width: 612,
        height: 792,
      });

      if (Platform.OS === "ios") {
        await Sharing.shareAsync(uri);
      } else {
        const permission = await MediaLibrary.requestPermissionsAsync();

        if (permission.granted) {
          await MediaLibrary.createAssetAsync(uri);
        }
      }

      console.log("CREADO:", uri);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <View>
      <TouchableHighlight onPress={createPDF}>
        <Text>Create PDF</Text>
      </TouchableHighlight>
    </View>
  );
}

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import * as Print from "expo-print";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import PDFReader from "rn-pdf-reader-js";
import { items, removeItem } from "../../global/Carrito";
import Cardx from "./Cardx";

const Carrito = ({ navigation }) => {
  const [refreshPage, setRefreshPage] = React.useState("");
  const [uri, setUri] = React.useState("");

  function realizarPedido() {
    createPDF();
  }

  async function createPDF() {
    let extraHtml = "";
    items.map((item, i) => {
      extraHtml += "</br>" + item.title;
    });

    const htmlContent = `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pdf Content</title>
    <style>
      body {
        font-size: 25px;
        color: rgb(51, 51, 51);
        font-family: sans-serif;
      }

      th {
        text-align: left;
        font-size: 35px;
        padding-bottom: 20px;
        padding-top: 74px;
      }
    </style>
  </head>
  <body>
    <table>
      <tr>
        <th>Producto</th>
        <th>Precio</th>
      </tr>
      <tr>
        <td>Pastel</td>
        <td>$12</td>
      </tr>
      <tr>
        <th>Total</th>
        <th>$123</th>
      </tr>
    </table>

    <h2>Gracias por comprar en Livreureats</h2>
  </body>
</html>
`;

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

      setUri(uri);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <View style={styles.container}>
      {uri ? (
        <PDFReader
          source={{ uri: uri }}
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <ScrollView>
          <Text style={styles.Title}>Carro de Productos</Text>
          <Text style={styles.subtitle}>
            Para remover, presiona el producto
          </Text>
          <View style={{ width: "100%", height: "100%", alignSelf: "center" }}>
            {items.map((item, i) => {
              return [
                <Text
                  key={i}
                  onPress={() => {
                    removeItem(item.id);
                    setRefreshPage("refresh");
                    alert("Producto Removido");
                  }}
                >
                  <Cardx itemData={item} />
                </Text>,
              ];
            })}

            <TouchableOpacity
              onPress={() => realizarPedido()}
              style={styles.Enviar}
            >
              <Text style={styles.btnTxt}>Realizar Pedido</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
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
    marginTop: 10,
    fontWeight: "bold",
    color: "#FF8400",
  },

  subtitle: {
    fontSize: 15,
    alignSelf: "center",
    alignContent: "center",
    marginTop: 10,
    fontWeight: "bold",
    color: "#FF8400",
  },
  Enviar: {
    width: 200,
    height: 40,
    backgroundColor: "green",
    borderRadius: 25,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  btnTxt: {
    fontSize: 20,
    marginTop: 5,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
  },
  icon: {
    color: "#fff",
  },
});

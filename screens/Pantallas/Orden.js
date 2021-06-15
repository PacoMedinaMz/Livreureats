import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  ScrollView,
} from "react-native";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
} from "react-native-paper";

import { Feather } from "@expo/vector-icons";
import Navigation from "../../navigation";
import Carrito from "../../global/Carrito";
const Orden = ({ route, navigation }) => {
  const itemData = route.params.itemData;

  const anadirAlCarrito = (item) => {
    if (item === undefined) return;
    Carrito.addItem(item);

    console.log(item);
    navigation.navigate("Carrito");
  };

  return (
    <View style={styles.container}>
      <Card style={styles.CardTitle}>
        <Text style={styles.TitleCard}>{itemData.title}</Text>
      </Card>

      <Card style={styles.cardCont}>
        {/* IMAGEN */}
        <Image style={styles.img} source={itemData.image} />

        {/* TITULO */}
        <Text style={styles.cardtxttitle}>{itemData.title}</Text>

        {/* DESCRIPCION */}
        <Text style={styles.cardtxt}>{itemData.description}</Text>

        {/* CATEGORIAS */}
        <Card style={styles.cat}>
          <Text style={styles.cardtxtcat}>{itemData.categories}</Text>
        </Card>

        {/* PRECIO */}
        <Text style={styles.cardprecio}>${itemData.precio} MXN</Text>

        {/* BOTONES */}
        <TouchableOpacity
          style={styles.cardbtn}
          onPress={() => anadirAlCarrito(itemData)}
        >
          <Text style={styles.cardtxtbtn}>
            Añadir al Carrito{" "}
            <Feather name="shopping-cart" size={22} color="white" />
          </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

export default Orden;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    color: "#fff",
  },
  CardTitle: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#EA593F",
    alignSelf: "center",
    width: 250,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  cardprecio: {
    alignSelf: "center",
    marginTop: 30,
    fontWeight: "bold",
    fontSize: 25,
  },

  TitleCard: {
    fontSize: 25,
    color: "#fff",
    alignSelf: "center",
    alignContent: "center",
    fontWeight: "bold",
  },

  cardtxttitle: {
    fontSize: 25,
    marginTop: 10,
    marginLeft: 15,
    fontWeight: "bold",
  },

  cardtxt: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 15,
  },

  cardtxtcat: {
    fontSize: 20,
    marginTop: 6,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
  },

  cat: {
    backgroundColor: "#FF6347",
    width: 300,
    height: 40,
    borderRadius: 25,
    marginTop: 15,
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
  },

  cardCont: {
    marginTop: 15,
    width: 350,
    height: 600,
    alignSelf: "center",
    borderRadius: 25,
  },

  cardtxtbtn: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
    marginBottom: 2,
  },

  cardbtn: {
    backgroundColor: "green",
    width: 210,
    height: 50,
    borderRadius: 25,
    marginTop: 30,
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
  },

  icon: {
    alignSelf: "center",
  },

  img: {
    alignSelf: "center",
    width: 350,
    height: 250,
    borderRadius: 25,
  },
});

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { items, removeItem } from "../../global/Carrito";
import Cardx from "./Cardx";
import { MaterialIcons } from '@expo/vector-icons';
const Carrito = ({ navigation }) => {
  const [refreshPage, setRefreshPage] = React.useState("");
  return (
    <View style={styles.container}>

      <ScrollView>
        <Text style={styles.Title}>Carro de Productos</Text>
        <Text style={styles.subtitle}>Para remover, presiona el producto</Text>
        <View style={{ width: "100%", height: "100%", alignSelf: 'center' }}>
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

            <TouchableOpacity onPress={() => { alert("Pedido Realizado exitosamente!");}} style={styles.Enviar}>
              <Text style={styles.btnTxt}>Realizar Pedido</Text>
            </TouchableOpacity>

        </View>


      </ScrollView>
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
    height:40,
    backgroundColor: 'green',
    borderRadius: 25,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  btnTxt: {
    fontSize:20,
    marginTop:5,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    alignSelf: 'center',
    justifyContent: 'center',
},
icon:{
 
  color:'#fff'
},
});

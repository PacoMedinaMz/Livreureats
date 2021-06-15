import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {data} from './data';

const CardPer = ({itemData, onPress}) => {
    return (
       <TouchableOpacity onPress={onPress}>
           <View style={styles.card}>
               <View style={styles.cardinfo}>
                    <Text style={styles.cardTitle}>ID:{itemData.idShort}</Text>
                    <Text style={styles.cardDetalles}>Nombre:{itemData.nombre}</Text>
                    <Text style={styles.cardDetalles}>Apellido Paterno: {itemData.apellidoPat}</Text>
                    <Text style={styles.cardDetalles}>Apellido Materno: {itemData.apellidoMat}</Text>
                    <Text style={styles.cardDetalles}>Sexo: {itemData.sexo}</Text>
               </View>
           </View>
       </TouchableOpacity>
       
    )
};

export default CardPer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    },

    Title: {
        fontSize: 25,
        color: '#fff',
        alignSelf: 'center',
        alignContent: 'center',
        fontWeight: 'bold',
        marginLeft: 25,
    },


    card: {
        width:350,
        height:130,
        marginTop:15,
        borderRadius: 25,
        backgroundColor: '#FFFAF4',
        borderColor:'#C8C8C8',
        borderWidth: 1.5
    },

    cardimgw:{
        flex:.1 ,
    },

    cardimg:{
        width:100,
        height:100,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        resizeMode:'contain'
    },

    cardinfo:{
        alignSelf:'flex-start',
        justifyContent:'center',
        alignContent:'center',
        color:'black',
        marginLeft: 45,
        marginTop: 5,
    },

    cardTitle:{
        fontSize:22,
        fontWeight:'bold',     
        color:'black',
    },

    cardDetalles:{
        fontSize:15,
        color:'black',
    },
    cardcat:{
        marginTop:5,
        fontSize:15,
        color:'#EA593F',
    },

});
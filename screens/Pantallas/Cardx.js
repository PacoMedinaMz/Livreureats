import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {data} from '../Pantallas/data';

const Cardx = ({itemData, onPress}) => {
    return (
       <TouchableOpacity onPress={onPress}>
           <View style={styles.card}>
               <View style={styles.cardimgw}>
                   <Image
                    source={itemData.image}
                    resizeMode='cover'
                    style={styles.cardimg}
                   />
               </View>
               <View style={styles.cardinfo}>
                    <Text style={styles.cardTitle}>{itemData.title}</Text>
                    <Text style={styles.cardDetalles}>{itemData.description}</Text>
                    <Text style={styles.cardcat}>{itemData.categories}</Text>
               </View>
           </View>
       </TouchableOpacity>
       
    )
};

export default Cardx;

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
        height:100,
        marginTop:15,
        borderRadius: 25,
        backgroundColor: '#FFFAF4',
        borderColor:'#C8C8C8',
        borderBottomWidth: 1.5
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
        alignSelf:'center',
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
        fontSize:20,
        color:'black',
    },
    cardcat:{
        marginTop:5,
        fontSize:15,
        color:'#EA593F',
    },

});
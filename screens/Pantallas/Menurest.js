import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';

const Menurest = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* MENU */}
            <View>
                <Text style={styles.Title}>Menú Restaurante</Text>
            </View>

            {/* CRUD PRODUCTOS */}
            <TouchableOpacity style={styles.Cardinf} onPress={() => navigation.navigate("CrudProductos")}>
                <Text style={styles.textinfo2}>Productos</Text>
            </TouchableOpacity>

            {/* CRUD EMPLEADOS */}
            <TouchableOpacity style={styles.Cardinf} onPress={() => navigation.navigate("CrudPersonal")}>
                <Text style={styles.textinfo2}>Personal</Text>
            </TouchableOpacity>
            
        </View >
    )
};

export default Menurest;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',

    },

    TitleCard: {
        fontSize: 25,
        color: '#fff',
        marginTop: 25,
        alignSelf: 'center',
        alignContent: 'center',
        fontWeight: 'bold',
    },
    CardTitle: {
        backgroundColor: '#EA593F',
        marginBottom:280,
        width: 250,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    Title: {
        fontSize: 30,
        alignSelf: 'center',
        alignContent: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        color: '#FF8400'
    },


    Cardinf: {
        borderRadius: 25,
        width: 300,
        height: 100,
        alignSelf: 'center',
        marginTop: 40,
        backgroundColor: '#FFFAF4',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderColor: '#D9D9D9',
    },


    textinfo2: {
        alignSelf: 'center',
        marginTop: 30,
        fontSize: 30,
        color: 'black',
    },

});
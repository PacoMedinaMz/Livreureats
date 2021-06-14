import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';

const CrudProductos = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* MENU */}
            <View>
                <Text style={styles.Title}>Gestión Productos</Text>
                <Text style={styles.subtitle}>Selecciona una Opción</Text>
            </View>

            {/* CONSULTAR PRODUCTOS */}
            <TouchableOpacity style={styles.Cardinf} onPress={() => {}}>
                <Text style={styles.textinfo2}>Consultar</Text>
            </TouchableOpacity>

            {/* AÑADIR PRODUCTOS */}
            <TouchableOpacity style={styles.Cardinf} onPress={() => navigation.navigate("altaP")}>
                <Text style={styles.textinfo2}>Añadir</Text>
            </TouchableOpacity>

            {/* ACTUALIZAR PRODUCTOS */}
            <TouchableOpacity style={styles.Cardinf} onPress={() => {}}>
                <Text style={styles.textinfo2}>Actualizar</Text>
            </TouchableOpacity>

            {/* ELIMINAR PRODUCTOS */}
            <TouchableOpacity style={styles.Cardinf} onPress={() => navigation.navigate("bajaP")}>
                <Text style={styles.textinfo2}>Eliminar</Text>
            </TouchableOpacity>
        </View >
    )
};

export default CrudProductos;

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
        marginBottom: 280,
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
    subtitle: {
        fontSize: 20,
        alignSelf: 'center',
        alignContent: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        color: '#FF8400'
    },

    Cardinf: {
        borderRadius: 25,
        width: 180,
        height: 80,
        alignSelf: 'center',
        marginTop: 40,
        backgroundColor: '#FFFAF4',
        borderBottomWidth: 2,
        borderRightWidth: 2,
        borderColor: '#D9D9D9',
    },


    textinfo2: {
        alignSelf: 'center',
        marginTop: 20,
        fontSize: 30,
        color: 'black',
    },

});
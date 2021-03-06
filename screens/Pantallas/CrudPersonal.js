import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';

const CrudPersonal = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* MENU */}
            <View>
                <Text style={styles.Title}>Gestión de Personal</Text>
                <Text style={styles.subtitle}>Selecciona una Opción</Text>
            </View>

            {/* CONSULTAR EMPLEADO */}
            <TouchableOpacity style={styles.Cardinf}  onPress={() => navigation.navigate("consPer")}>
                <Text style={styles.textinfo2}>Consultar</Text>
            </TouchableOpacity>

            {/* AÑADIR EMPLEADO */}
            <TouchableOpacity style={styles.Cardinf}  onPress={() => navigation.navigate("altaPer")}>
                <Text style={styles.textinfo2}>Añadir</Text>
            </TouchableOpacity>

            {/* ACTUALIZAR EMPLEADO */}
            <TouchableOpacity style={styles.Cardinf}  onPress={() => navigation.navigate("actPer")}>
                <Text style={styles.textinfo2}>Actualizar</Text>
            </TouchableOpacity>

            {/* ELIMINAR EMPLEADO */}
            <TouchableOpacity style={styles.Cardinf}  onPress={() => navigation.navigate("bajaPer") }>
                <Text style={styles.textinfo2}>Eliminar</Text>
            </TouchableOpacity>
        </View >
    )
};

export default CrudPersonal;

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
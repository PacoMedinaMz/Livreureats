import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';

const Opciones = () => {
    return (
        <View style={styles.container}>
            <View style={styles.stack}>
                <Text style={styles.Title}>Opciones</Text>
            </View>

        </View>
    )
};

export default Opciones;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: 'center',
        marginTop: 35,
    },



    Title: {
        fontSize: 25,
        alignSelf: 'center',
        alignContent: 'center',
        fontWeight: 'bold',
        color: '#fff',

    },


    stack: {

        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width:430,
        height:50,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        backgroundColor: '#FF6347',
    },

});


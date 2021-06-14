import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';

const Carrito = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* MENU */}
            <View>
                <Text style={styles.Title}>CARRITO</Text>
            </View>

        </View >
    )
};

export default Carrito;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',

    },

    Title: {
        fontSize: 30,
        alignSelf: 'center',
        alignContent: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        color: '#FF8400'
    },

});
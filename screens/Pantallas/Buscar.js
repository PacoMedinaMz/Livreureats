import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';

const Comrapida = ({ navigation }) => {

    return (
        <View style={styles.stack}>
            <Text style={styles.Title}>Soporte en vivo</Text>
        </View>


    )
};

export default Comrapida;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: 'center',
        padding: 30,
    },

    Title: {
        fontSize: 25,
        alignSelf: "center",
        alignContent: "center",
        fontWeight: "bold",
        color: "#fff",
    },

    stack: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: 430,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        backgroundColor: "#FF6347",
        paddingTop: 43,
        paddingBottom: 10,
    },
});
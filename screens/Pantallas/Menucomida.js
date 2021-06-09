import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const Menucomida = () => {
    return (
        <View style={styles.container}>
            <Text >
                Menucomida
            </Text>
        </View>
    )
};

export default Menucomida;

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


    stack: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'red',
        color: 'orange',
    },

});
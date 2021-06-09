import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';

const Bebidas = () => {
    return (
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity style={styles.botoninfo} >
                        <Card style={styles.Cardinf}>
                            <Image style={styles.blurimg} source={require('../../assets/images/beb1.jpg')} resizeMode="cover" />
                        </Card>
                    </TouchableOpacity>

                    {/*  onPress={() => navigation.navigate("Menucomida")} */}
                    <TouchableOpacity style={styles.botoninfo}>
                        <Card style={styles.Cardinf}>
                            <Image style={styles.blurimg} source={require('../../assets/images/beb2.jpg')} resizeMode="cover" />
                        </Card>
                    </TouchableOpacity>
                </ScrollView>
            </View>
    )
};

export default Bebidas;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: 'center',
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

    textinfo: {
        alignSelf: 'center',
        marginTop: 40,
        marginRight: 200,
        fontSize: 25,
        color: '#fff',
    },

    blurimg: {
        width: 350,
        height: 100,
        alignSelf: 'center',
        alignContent: 'center',
        borderRadius: 8,
        position: 'absolute',
        resizeMode: 'cover',
    },

    Cardinf: {
        borderRadius: 25,
        backgroundColor: '#FFFAF4',
        width: 350,
        height: 100,
        alignSelf: 'center',
        margin: 15,
        marginTop: 20,
        paddingBottom: 4,

    },

    botoninfo: {
        width: 350,
        height: 100,
        alignSelf: 'center',
        margin: 15,

    },

});
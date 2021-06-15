import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, IconButton, TextInput} from 'react-native-paper';

const Buscar = ({ navigation }) => {
    const [buscar, setBuscar] = React.useState("");

    return (
        <View style={styles.stack}>
            <Text style={styles.Title}>Buscador</Text>
            {/* DIRECCION */}
            <TextInput placeholde = "Hola" keyboardType={"default"} style={styles.forminput} onChangeText={(foo) => { setBuscar(foo); }} value={buscar}/>
            <Pressable style={styles.Enviar} onPress={() => {
                console.log(buscar);
                fetch('http://192.168.1.76:3000/busProd', {
                    method: 'POST',
                    headers: {
                        'Content-Type': "application/json"
                    }, body: JSON.stringify({
                        buscar: buscar
                        })
                }).then(() => {
                    console.log("Datos enviados...")
                            })
                }}>
                    <Text style={styles.btnTxt}>Buscar</Text>
                </Pressable>
            
            {/*
            <Pressable style={styles.Enviar} onPress={() => {
                            fetch('http://localhost:3000/insUsu', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': "application/json"
                                }, body: JSON.stringify({
                                    
                                })
                            }).then(() => {
                                console.log("Datos enviados...")
                            })
                        }}></Pressable>*/}



        </View>


    )
};

export default Buscar;

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
    },forminput: {
        width: "80%",
        alignSelf: 'center',
        backgroundColor: '#FFF',
        marginTop: 10,
        justifyContent: 'center',
        alignContent: 'center',
        color: '#FF6347'
    },btnTxt: {
        width: "100%",
        color: "#fff",
        textAlign: "center",
        paddingTop: 15,
        paddingBottom: 8,
        fontWeight: "bold",
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
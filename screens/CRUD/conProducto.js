import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import Cardx from '../Pantallas/Cardx';
import { FlatList } from 'react-native-gesture-handler';
import { menu } from '../Pantallas/data';

const conProducto = ({ navigation }) => {


    const renderItem = ({ item }) => {
        return (
            <Cardx itemData={item} />
            
        );
    }
    return (
        <View style={styles.container}>
                <View style={styles.stack}>
                    <Text style={styles.Title}>Productos</Text>
                </View>

                <View style={styles.lista}>
                    <FlatList
                        data={menu}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                    
                </View>
                
        </View >
    )
};

export default conProducto;

// ESTILOS

const styles = StyleSheet.create({
    CardTitle: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#EA593F',
        alignSelf: 'center',
        width: 220,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    botones: {
        flexDirection: "row",
        alignSelf: 'center',
    },
    lista: {
        alignSelf: 'center',
    },

    container: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: 'center',
        color: '#fff',
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

    Title: {
        fontSize: 25,
        alignSelf: "center",
        alignContent: "center",
        fontWeight: "bold",
        color: "#fff",
    },



});
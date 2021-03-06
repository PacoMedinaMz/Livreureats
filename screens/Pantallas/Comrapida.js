import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import Cardx from './Cardx';
import { FlatList } from 'react-native-gesture-handler';
import { crapida } from './data';

const Comrapida = ({ navigation }) => {
   
    const renderItem = ({ item }) => {
        return (
            <Cardx itemData={item}
            onPress={() => navigation.navigate('Orden', {itemData: item})} />
        );
    }
    return (
        <View style={styles.container}>
            <View>
                <Card style={styles.CardTitle}>
                    <Text style={styles.TitleCard}>Comida Rápida</Text>
                </Card>
                <FlatList
                    data={crapida}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
};

export default Comrapida;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: 'center',
        color: '#fff',
    },
    CardTitle: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#EA593F',
        alignSelf: 'center',
        width: 250,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },

    TitleCard: {
        fontSize: 25,
        color: '#fff',
        alignSelf: 'center',
        alignContent: 'center',
        fontWeight: 'bold',
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
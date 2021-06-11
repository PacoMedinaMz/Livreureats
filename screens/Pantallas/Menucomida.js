import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, } from "react-native";
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import Cardx from './Cardx';
import { FlatList } from 'react-native-gesture-handler';
import { bebida, menu } from './data';

const Menucomida = ({ navigation }) => {
   
    const renderItem = ({ item }) => {
        return (
            <Cardx itemData={item}
                onPress={() => { }} />
        );
    }
    return (
        <View style={styles.container}>
            <View>
                <Card style={styles.CardTitle}>
                    <Text style={styles.TitleCard}>Menú</Text>
                </Card>
                <FlatList
                    data={menu}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>
    )
};

export default Menucomida;

const styles = StyleSheet.create({
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
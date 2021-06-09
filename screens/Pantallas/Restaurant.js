import React from 'react';
import { View, Text, StyleSheet } from "react-native";

const Restaurant = () => {
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

export default Restaurant;

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
import React from 'react'
import { View, Text, Image, StyleSheet } from "react-native";
import Swiper from 'react-native-swiper';


const HomeRest = () => {
    return (
        <View></View>
    )
};

export default HomeRest;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 9,
    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
    }


});
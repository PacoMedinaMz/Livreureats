import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, } from "react-native";
import Swiper from 'react-native-swiper';
import { Avatar, Button, Card, Title, Paragraph, IconButton } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import Restaurant from '../../screens/Pantallas/Restaurant';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>

            <View><Text style={styles.Title}>Bienvenido{'\n'}</Text></View>
            <View style={styles.sliderContainer}>
                <Swiper activeDotColor="#FF6347" horizontal={false} removeClippedSubviews={false} autoplay height={200}>

                    {/* imagen slide 1 */}
                    <View style={styles.slide}>
                        <Image style={styles.sliderImage} source={require('../../assets/images/Comida.jpg')} resizeMode="cover" />
                    </View>

                    {/* imagen slide 2 */}
                    <View style={styles.slide}>
                        <Image style={styles.sliderImage} source={require('../../assets/images/img2.jpg')} resizeMode="cover" />
                    </View>

                    {/* imagen slide 3 */}
                    <View style={styles.slide}>
                        <Image style={styles.sliderImage} source={require('../../assets/images/img3.jpg')} resizeMode="cover" />
                    </View>

                </Swiper>
            </View>


            <View style={styles.opciones}>
                <TouchableOpacity style={styles.boton}  onPress={()=>navigation.navigate("Comrapida")}>
                    <Card style={styles.Cardmenu}>
                        <MaterialIcons style={styles.icon} name="fastfood" size={40} color="black" />
                    </Card>
                    <Text style={styles.texticon}>Comida Rápida</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boton} onPress={()=>navigation.navigate("Postres")}>
                    <Card style={styles.Cardmenu}>
                        <MaterialIcons style={styles.icon} name="icecream" size={40} color="black" />
                    </Card>
                    <Text style={styles.texticon}>Postres</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.boton} onPress={()=>navigation.navigate("Bebidas")} >
                    <Card style={styles.Cardmenu}>
                        <MaterialIcons style={styles.icon} name="emoji-food-beverage" size={40} color="black" />
                    </Card>
                    <Text style={styles.texticon}>Bebidas</Text>
                </TouchableOpacity>



            </View>

            <View style={styles.info}>
            {/* onPress={onPress }*/}
                <TouchableOpacity style={styles.botoninfo} onPress={()=>navigation.navigate("Menucomida")}>
                    <Card style={styles.Cardinf}>
                        <Image style={styles.blurimg} source={require('../../assets/images/btn1.png')} resizeMode="cover" />
                        <Text style={styles.textinfo}>Menú</Text>
                    </Card>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botoninfo} onPress={()=>navigation.navigate("Menurest")}>
                    <Card style={styles.Cardinf}> 
                        <Image style={styles.blurimg} source={require('../../assets/images/btn2.png')} resizeMode="cover" />
                        <Text style={styles.textinfo}>Restaurant</Text>
                    </Card>
                </TouchableOpacity>

            </View>

        </View>
    )
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    texticon: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#FF6347',
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

    boton: {
        borderRadius: 80,
        width: 100,
        height: 100,
        alignSelf: 'center',
        margin: 8,
    },

    botoninfo: {
        width: 350,
        height: 100,
        alignSelf: 'center',
        margin: 15,
    },

    icon: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#FF6347',
    },

    opciones: {
        flex: .3,
        flexDirection: 'row',
        alignSelf: 'center'
    },

    info: {
        flex: .3,
        alignSelf: 'center'
    },

    Cardmenu: {
        borderRadius: 80,
        backgroundColor: '#FFFAF4',
        width: 100,
        height: 100,
        padding: 20,
        alignSelf: 'center',
        borderBottomWidth: 1.2,
        borderRightWidth: 1.2,
        borderColor: '#D9D9D9',

    },
    Cardinf: {
        borderRadius: 25,
        backgroundColor: '#FFFAF4',
        width: 350,
        height: 100,
        alignSelf: 'center',
        margin: 15,
        marginTop: 20,
    },

    CardtitleText: {
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#FF8400',
    },

    Title: {
        fontSize: 20,
        alignSelf: 'center',
        alignContent: 'center',
        marginTop: 20,
        fontWeight: 'bold'
    },

    sliderContainer: {
        height: 200,
        width: '90%',
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
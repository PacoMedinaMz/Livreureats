import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, Platform} from "react-native"
import { TextInput, Card } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';
import ip from '../ipCrud';

const altaProducto = ({ navigation }) => {

    // Aqui declaro las variables que se usan en los inputs
    const [id, setId] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState("");
    const [categories, setCat] = React.useState("");
    const [precio, setPrecio] = React.useState("");
    const [restaurante, setRest] = React.useState("");
    
    // FUNCIONES DE CARGAR DE FOTO
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
        var band=Math.floor(Math.random() * 101);
        console.log(band);
        band=band.toString();
        console.log(band);
        setId(band);
        console.log(id)
    }, []);


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });


        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    // FUNCIONES DE CARGAR DE FOTO FIN

    const btnEnviar = ()=>{
        Alert.alert(
            "¿Esta seguro de dar de alta el producto?",
            `Se dara de alta el producto con id: ${id}`,
            [
                {
                    text: "Regresar",
                    onPress: () => navigation.goBack(),
                    style: "cancel"
                },
                { text: "Continuar", onPress: () => altaProd() }
            ]
        );
    }
    function altaProd(){
        let data = {
            
            nombre_producto: title,
            descripcion:description,
            categoria: categories,
            precio: precio,
            id: id,
            restaurante:restaurante,
            //image: image,
        };

        console.log("Objeto:", JSON.stringify(data));

        const response = fetch(`${ip.ip}insPro`, {
            method: "POST",
            headers: {
                "Content-Type":
                "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log("Respuesta:", response);
    }
    return (
        <View style={styles.container}>
            <View style={styles.stack}>
                <Text style={styles.Title}>Alta Producto</Text>
            </View>
            <ScrollView>
                <Card style={styles.card}>
                    {/* ACA EMPIEZA EL FORM CON SUS IMPUTS */}

                    <View><Text style={styles.Titletxt}>Introduce los siguientes datos:</Text></View>

                    {/* ID */}
                    <TextInput value={`Id aleatorio: ${id}`} placeholder={"ID"} keyboardType={"numeric"} disabled
                        style={styles.forminput}
                    />

                    {/* NOMBRE */}
                    <TextInput onChangeText={(foo) => { setTitle(foo); }} value={title} placeholder={"Producto"} keyboardType={"default"}
                        style={styles.forminput}
                    />

                    {/* DESCRIPCION */}
                    <TextInput onChangeText={(foo) => { setDescription(foo); }} value={description} placeholder={"Descripción"} keyboardType={"default"}
                        style={styles.forminput}
                    />

                    {/* CATEGORIES */}
                    <TextInput onChangeText={(foo) => { setCat(foo); }} value={categories} placeholder={"Categoría"} keyboardType={"default"}
                        style={styles.forminput}
                    />

                    {/* PRECIO */}
                    <TextInput onChangeText={(foo) => { setPrecio(foo); }} value={precio} placeholder={"Precio"} keyboardType={"numeric"}
                        style={styles.forminput}
                    />
                     {/* RESTAURANTE    */}
                    <TextInput onChangeText={(foo) => { setRest(foo); }} value={restaurante} placeholder={"Restaurante"} keyboardType={"default"}
                        style={styles.forminput}
                    />

                     {/* FOTO */}
                     <TouchableOpacity style={styles.btnfoto} title="Imagen" onPress={pickImage}>
                        <Text style={styles.textfoto}>Foto</Text>
                    </TouchableOpacity>
                    {<Image source={{ uri: image }} style={styles.fotocard} />}

                    {/* BOTONES DE OPCIONES */}
                    <View style={styles.botones}>

                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.Regresar}>
                            <Text style={styles.btnTxt}>Regresar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={btnEnviar} style={styles.Enviar}>
                            <Text style={styles.btnTxt}>Agregar</Text>
                        </TouchableOpacity>
                    </View>

                </Card>
            </ScrollView>
        </View>
    )
};

export default altaProducto;

// ESTILOS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    botones: {
        flexDirection: "row",
        alignSelf: 'center',
        paddingBottom:400,
    },
    
    fotocard: {
        width: 100,
        height: 100,
        marginBottom: 25,
        marginTop: 10,
        alignSelf: 'center',
        borderRadius: 25,
    },
    btnfoto: {
        width: "29%",
        height: 50,
        backgroundColor: '#FF6347',
        borderRadius: 25,
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        marginTop: 30

    },

    textfoto: {
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 10,
        color: '#fff',
    },

    card: {
        width: 380,
        height: 880,
        alignContent: 'center',
        alignSelf: 'center',
        padding: 15,
        marginTop: 50,
        borderRadius: 25,
        borderColor: '#D9D9D9',
        borderBottomWidth: 2,
    },

    CardTitle: {
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#EA593F',
        alignSelf: 'center',
        width: 424,

        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    Title: {
        fontSize: 25,
        alignSelf: "center",
        alignContent: "center",
        fontWeight: "bold",
        color: "#fff",
    },
    Titletxt: {
        fontSize: 22,
        marginTop: 30,
        alignSelf: "center",
        alignContent: "center",
        fontWeight: "bold",
        color: "#FF6347",
        marginBottom: 20,
    },

    Titletxt2: {
        fontSize: 18,
        marginTop: 35,
        marginBottom: 10,
        alignSelf: "center",
        alignContent: "center",
        fontWeight: "bold",
        color: "#FF6347",
    },

    textinfo2: {
        alignSelf: 'center',
        marginTop: 40,
        fontSize: 20,
        color: '#fff',
    },
    Cardinf: {
        borderRadius: 25,
        backgroundColor: '#FFFAF4',
        width: 300,
        height: 100,
        alignSelf: 'center',
    },

    blurimg: {
        width: 300,
        height: 100,
        alignSelf: 'center',
        alignContent: 'center',
        borderRadius: 8,
        position: 'absolute',
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
    forminput: {
        width: "80%",
        alignSelf: 'center',
        backgroundColor: '#FFF',
        marginTop: 10,
        justifyContent: 'center',
        alignContent: 'center',
        color: '#FF6347'
    },
    Enviar: {
        width: "35%",
        backgroundColor: 'green',
        borderRadius: 25,
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        paddingTop: -30,
        paddingVertical: 10,
        marginLeft: 20,
    },
    Regresar: {
        width: "35%",
        backgroundColor: '#FF6347',
        borderRadius: 25,
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        paddingTop: -30,
        paddingVertical: 10,

    },
    Login: {
        width: "50%",
        backgroundColor: '#FF6347',
        borderRadius: 25,
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        paddingTop: 0,
        paddingVertical: 10,
        marginTop: 30,
        marginLeft: 20,
    },
    btnTxt: {
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
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ScrollView } from "react-native"
import { TextInput, Card } from "react-native-paper";

const altaProducto = ({ navigation }) => {

    // Aqui declaro las variables que se usan en los inputs
    const [id, setId] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [img, setImg] = React.useState("");
    const [categories, setCat] = React.useState("");
    const [precio, setPrecio] = React.useState("");

    // //ALERT
    // const Enviado = () =>
    //     Alert.alert(
    //         "¡Restaurante registrado!",
    //         "Tu Restaurante ha sido registrado exitosamente",
    //         [
    //             {
    //                 text: "Regresar",
    //                 onPress: () => navigation.goBack(),
    //                 style: "cancel"
    //             },
    //             { text: "Continuar", onPress: () => navigation.navigate("Login") }
    //         ]
    //     );

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
                    <TextInput onChangeText={(foo) => { setId(foo); }} value={id} placeholder={"ID"} keyboardType={"numeric"}
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

                    {/* CATEGORIES */}
                    <TextInput onChangeText={(foo) => { setPrecio(foo); }} value={precio} placeholder={"Precio"} keyboardType={"numeric"}
                        style={styles.forminput}
                    />

                    {/* BOTONES DE OPCIONES */}
                    <View style={styles.botones}>

                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.Regresar}>
                            <Text style={styles.btnTxt}>Regresar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Enviar}>
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
    },

    card: {
        width: 380,
        height: 600,
        alignContent: 'center',
        alignSelf: 'center',
        padding: 15,
        marginTop: 90,
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
        marginTop: 10,
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
        paddingTop: 0,
        paddingVertical: 10,
        marginTop: 30,
        marginLeft: 20,
    },
    Regresar: {
        width: "35%",
        backgroundColor: '#FF6347',
        borderRadius: 25,
        alignSelf: "center",
        alignContent: "center",
        alignItems: "center",
        paddingTop: 0,
        paddingVertical: 10,
        marginTop: 30,

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
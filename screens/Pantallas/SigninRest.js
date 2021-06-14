import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ScrollView } from "react-native"
import { TextInput, Card } from "react-native-paper";

const SigninRest = ({ navigation }) => {

    // Aqui declaro las variables que se usan en los inputs
    const [nombre, setNombre] = React.useState("");
    const [ubicacion, setUbi] = React.useState("");
    const [img, setImg] = React.useState("");
    const [des, setDes] = React.useState("");
    const [horario, setHor] = React.useState("");
    const [passRes, setPassRes] = React.useState("");

    //Funcion que envia los datos
    function Enviar() {
        let data = {
            nombre: nombre,
            ubicacion: ubicacion,
            img: img,
            des: des,
            horario: horario,
        };

        console.log("Objeto:", JSON.stringify(data));

        const response = fetch("https://localhost:", {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json",
            },
            body: JSON.stringify(data),
        });
        console.log("Respuesta:", response);

    }

    //ALERT
    const Enviado = () =>
        Alert.alert(
            "¡Restaurante registrado!",
            "Tu Restaurante ha sido registrado exitosamente",
            [
                {
                    text: "Regresar",
                    onPress: () => navigation.goBack(),
                    style: "cancel"
                },
                { text: "Continuar", onPress: () => navigation.navigate("Login") }
            ]
        );

    return (
        <View style={styles.container}>
            <View style={styles.stack}>
                <Text style={styles.Title}>Registro Restaurante</Text>
            </View>
            <ScrollView>
                <Card style={styles.card}>
                    {/* ACA EMPIEZA EL FORM CON SUS IMPUTS */}

                    <View><Text style={styles.Titletxt}>Introduce los siguientes datos:</Text></View>

                    {/* NOMBRE */}
                    <TextInput onChangeText={(foo) => { setNombre(foo); }} value={nombre} placeholder={"Nombre"} keyboardType={"default"}
                        style={styles.forminput}
                    />

                    {/* RESTAURANTE */}
                    <TextInput onChangeText={(foo) => { setUbi(foo); }} value={ubicacion} placeholder={"Ubicación"} keyboardType={"default"}
                        style={styles.forminput}
                    />

                    {/* RESTAURANTE */}
                    <TextInput onChangeText={(foo) => { setDes(foo); }} value={des} placeholder={"Descripción"} keyboardType={"default"}
                        style={styles.forminput}
                    />

                    {/* HORARIO */}
                    <TextInput onChangeText={(foo) => { setHor(foo); }} value={des} placeholder={"Horario"} keyboardType={"default"}
                        style={styles.forminput}
                    />

                    {/* CONTRASEÑA */}
                    <TextInput secureTextEntry={true} onChangeText={(foo) => { setPassRes(foo); }} value={passRes} placeholder={"Contraseña"} keyboardType={"default"}
                        style={styles.forminput}
                    />

                    {/* BOTONES DE OPCIONES */}
                    <View style={styles.botones}>

                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.Regresar}>
                            <Text style={styles.btnTxt}>Regresar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={Enviado} style={styles.Enviar}>
                            <Text style={styles.btnTxt}>Registrarse</Text>
                        </TouchableOpacity>
                    </View>

                </Card>
            </ScrollView>
        </View>
    )
};

export default SigninRest;

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
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { TextInput, Card } from "react-native-paper";
import { EvilIcons } from '@expo/vector-icons';


const Login = ({ navigation }) => {
    // Aqui declaro las variables que se usan en los inputs

    //Nombre
    const [nombre, setNombre] = React.useState("");
    const [passLog, setPassLog] = React.useState("");
    //Funcion que envia los datos
    function Ingresar({ navigation }) {


        const [celular, setcel] = React.useState("");

        //Funcion que envia los datos
        function Ingresar() {
            let datalog = {
                celular: celular,
            };

            console.log("Objecto:", JSON.stringify(data));

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
    }

    return (
        <View style={styles.container}>
            <View style={styles.stack}>
                <Text style={styles.Title}>Ingreso</Text>
            </View>
            <Card style={styles.card}>
                <EvilIcons style={styles.icon} name="user" size={150} color="#FF6347" />

                <View><Text style={styles.Titletxt}>Introduce los siguientes datos:</Text></View>


                <TextInput onChangeText={(foo) => { setNombre(foo); }} value={nombre} placeholder={"Nombre"} style={styles.forminput} keyboardType={'default'} />

                <TextInput secureTextEntry={true} onChangeText={(foo) => { setPassLog(foo); }} value={passLog} placeholder={"Contraseña"} style={styles.forminput} keyboardType={'phone-pad'} />


                {/* BOTONES */}
                <TouchableOpacity onPress={() => navigation.popToTop()} style={styles.Enviar}>
                    <Text style={styles.btnTxt}>Ingresar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.Regresar}>
                    <Text style={styles.btnTxt}>Regresar</Text>
                </TouchableOpacity>
            </Card>
        </View>
    )
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    icon: {
        alignSelf: 'center',

    },

    card: {
        width: 380,
        height: 550,
        alignContent: 'center',
        alignSelf: 'center',
        padding: 15,
        marginTop: 100,
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
        marginTop: 20,
        alignSelf: "center",
        alignContent: "center",

        fontWeight: "bold",
        color: "#FF6347",
        marginBottom: 20,
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
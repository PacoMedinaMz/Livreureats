import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Picker, Button } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, Card } from "react-native-paper";
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';


const Signin = ({ navigation }) => {

    // USUARIO
    const [nombre, setNombre] = React.useState("");
    const [apellidoMat, setApeMat] = React.useState("");
    const [apellidoPat, setApePat] = React.useState("");
    const [fecha = { date: "2016-05-15" }, setfechaNac] = React.useState("");
    const [sexo, setSexo] = React.useState("");
    const [tarjeta, setTarjeta] = React.useState("");
    const [img, setImg] = React.useState("");
    const [dir, setDir] = React.useState("");
    const [pass, setPass] = React.useState("");


    //Funcion que envia los datos
    function Enviar() {
        let data = {
            nombre: nombre,
            apellido: apellido,
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

    //ALERT
    const Enviado = () =>
        Alert.alert(
            "Registrado",
            "Tu cuenta ha sido registrada exitosamente",
            [
                {
                    text: "Regresar",
                    onPress: () => navigation.goBack(),
                    style: "cancel"
                },
                { text: "Continuar", onPress: () => navigation.navigate("Login") }
            ]
        );


    const launchImageLibrary = async () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log('response', JSON.stringify(response));
                this.setState({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri
                });
            }
        });

    }

    return (

        <View style={styles.container}>

            <View style={styles.stack}>
                <Text style={styles.Title}>Registro Usuario</Text>
            </View>
            <ScrollView>
                <Card style={styles.card}>

                    <View><Text style={styles.Titletxt}>Introduce los siguientes datos:</Text></View>

                    {/* NOMBRE */}
                    <TextInput onChangeText={(foo) => { setNombre(foo); }} value={nombre} placeholder={"Nombre"} keyboardType={"default"}
                        style={styles.forminput}
                    />

                    {/* APELLIDO PATERNO */}
                    <TextInput onChangeText={(foo) => { setApePat(foo); }} value={apellidoPat} placeholder={"Apellido Paterno"} keyboardType={"default"}
                        style={styles.forminput}
                    />

                    {/* APELLIDO MATERNO */}
                    <TextInput onChangeText={(foo) => { setApeMat(foo); }} value={apellidoMat} placeholder={"Apellido Materno"} keyboardType={"default"}
                        style={styles.forminput}
                    />

                     {/* PASSWORD */}
                     <TextInput onChangeText={(foo) => { setPass(foo); }} value={pass} placeholder={"Contraseña"} keyboardType={"default"}
                        style={styles.forminput}
                    />

                    {/* fecha nacimiento */}
                    <Text style={styles.fechatxt}>Fecha de Nacimiento</Text>
                    <DatePicker
                        style={styles.fecha}
                        date={fecha.date}
                        mode="date"
                        placeholder="Fecha Nacimiento"
                        format="YYYY-MM-DD"
                        minDate="2021-06-13"
                        maxDate="2022-06-13"
                        confirmBtnText="Confirmar"
                        cancelBtnText="Cancelar"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36,
                                backgroundColor: '#fff',
                                borderColor: "#FF6347",
                                borderRadius: 25,
                            }
                        }}
                        onDateChange={(date) => { setfechaNac({ date: date }) }}
                    />

                    {/* SEXO */}
                    <View style={styles.sexlbl}>
                        <Text style={styles.sextx}>Sexo:</Text>
                        <Picker
                            selectedValue={sexo}
                            style={styles.sex}
                            onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}
                        >

                            <Picker.Item label="Hombre" value="H" />
                            <Picker.Item label="Mujer" value="M" />
                        </Picker>
                    </View>

                    {/* IMAGEN */}
                    {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 100 }}>
                        <Button title="request permissions" onPress={launchImageLibrary} />
                        <Button title="Pick an image from camera roll" onPress={() => navigation.navigate("galeria")} />
                    </View> */}

                    {/* TARJETA DE CRÉDITO */}
                    <TextInput onChangeText={(foo) => { setTarjeta(foo); }} value={tarjeta} placeholder={"Tarjeta de Crédito"} keyboardType={"numeric"}
                        style={styles.forminput}
                    />


                    {/* DIRECCION */}
                    <TextInput onChangeText={(foo) => { setDir(foo); }} value={dir} placeholder={"Domicilio"} keyboardType={"default"}
                        style={styles.forminput}
                    />


                    {/* BOTONES */}
                    <View style={styles.botones}>

                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.Regresar}>
                            <Text style={styles.btnTxt}>Regresar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={Enviado} style={styles.Enviar}>
                            <Text style={styles.btnTxt}>Enviar</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.Login}>
                        <Text style={styles.btnTxt}>¿Ya estas registrado?</Text>
                    </TouchableOpacity>

                    <View><Text style={styles.Titletxt2}>¿Tienes un restaurante?</Text></View>
                    <TouchableOpacity style={styles.Cardinf} onPress={() => navigation.navigate("SigninRest")}>
                        <Image style={styles.blurimg} source={require('../../assets/images/rest1.jpg')} resizeMode="cover" />
                        <Text style={styles.textinfo2}>Registro Restaurantes</Text>
                    </TouchableOpacity>
                </Card>
            </ScrollView>


        </View>
    )
};

export default Signin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },

    sexlbl: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 25,
    },
    sex: {
        color: "black",
        height: 50,
        width: 150,
    },

    sextx: {
        alignSelf: 'center',
        color: 'gray',
    },

    fechatxt: {
        marginTop: 25,
        color: 'gray',
        alignSelf: 'center',
    },
    botones: {
        flexDirection: "row",
        alignSelf: 'center',
    },

    card: {
        width: 380,
        height: 1100,
        alignContent: 'center',
        alignSelf: 'center',
        padding: 15,
        marginTop: 20,
        borderRadius: 25,
        borderColor: '#D9D9D9',
        borderBottomWidth: 2,
    },


    fecha: {
        width: 200,
        backgroundColor: '#fff',
        borderColor: '#fff',
        alignSelf: 'center',
        marginTop: 10,
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
        marginTop: 30

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
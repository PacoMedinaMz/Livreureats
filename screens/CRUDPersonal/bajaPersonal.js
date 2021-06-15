import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, FlatList } from "react-native"
import { TextInput, Card } from "react-native-paper";
import ip from '../ipCrud'

const BajaPersonal = ({ navigation }) => {

    // Aqui declaro las variables que se usan en los inputs
    const [id, setId] = React.useState("");
    const [personal, setPersonal]= React.useState([]);

    React.useEffect(()=>{
        
        api();
        
    },[]);
    async function api(){
        await fetch(`${ip.ip}busPersonal`)
        .then((res) => res.json())
        .then((json) => {
            setPersonal(json.data);
            
        });
    }
    const btnEliminar=()=>{
        Alert.alert(
            "¿Esta seguro de eliminar el personal?",
            `Eliminara el personal con id: ${id}`,
            [
                {
                    text: "Regresar",
                    onPress: () => navigation.goBack(),
                    style: "cancel"
                },
                { text: "Continuar", onPress: () => apiEliminar() }
            ]
        );
    }
    async function apiEliminar(){
        await fetch(`${ip.ip}delPersonal/${id}`)
        .then((res) => res.json())
        .then((json) => {
            setPersonal(json.data);
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.stack}>
                <Text style={styles.Title}>Baja Personal</Text>
            </View>
                <View style={styles.productos}>
                            <ScrollView style={styles.row} horizontal>
                                 <Text style={styles.ProductoTxt}>Id</Text>
                                <Text style={styles.ProductoTxt}>Nombre</Text>
                                <Text style={styles.ProductoTxt}>Ap. Paterno</Text>
                                <Text style={styles.ProductoTxt}>Ap. Materno</Text>
                                <Text style={styles.ProductoTxt}>Sexo</Text>
                                
                            </ScrollView>
                </View>
                <FlatList
                    
                    data={personal}
                    renderItem={({item})=>(
                        <View style={styles.productos}>
                            <View style={styles.row}>
                            <Text style={styles.ProductoTxt}>{item.idShort}</Text>
                                <Text style={styles.ProductoTxt}>{item.nombre}</Text>
                                <Text style={styles.ProductoTxt}>{item.apellidoPat}</Text>
                                <Text style={styles.ProductoTxt}>{item.apellidoMat}</Text>
                                <Text style={styles.ProductoTxt}>{item.sexo}</Text>
                                
                            </View>
                        </View>
                    )}
                    
                    keyExtractor={item => item._id}
                 />
            <ScrollView>
                <Card style={styles.card}>
                    {/* ACA EMPIEZA EL FORM CON SUS IMPUTS */}

                    <View><Text style={styles.Titletxt}>Introduce el ID del empleado:</Text></View>

                    {/* ID */}
                    <TextInput onChangeText={(foo) => { setId(foo); }} value={id} placeholder={"ID"} keyboardType={"numeric"}
                        style={styles.forminput}
                    />

                    {/* BOTONES DE OPCIONES */}
                    <View style={styles.botones}>

                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.Regresar}>
                            <Text style={styles.btnTxt}>Regresar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={btnEliminar} style={styles.Enviar}>
                            <Text style={styles.btnTxt}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>

                </Card>
            </ScrollView>
        </View>
    )
};

export default BajaPersonal;

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
        height: 300,
        alignContent: 'center',
        alignSelf: 'center',
        padding: 15,
        marginTop: 180,
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
        width: 100,
        height: 200,
        alignSelf: 'center',
        marginTop: 10,
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
    productos:{
        flexDirection:"row",
        justifyContent:"center",
        padding:10,
        borderBottomWidth:1
    },
    row:{
        flexDirection:"row"
    },
    ProductoTxt:{
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 14,
        marginTop: 5,
        marginLeft:12,
        marginRight:12,
        fontWeight: "bold",
        color: "#FF6347",
    }
});
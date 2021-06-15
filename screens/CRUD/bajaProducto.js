import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ScrollView, ActivityIndicator, FlatList } from "react-native"
import { TextInput, Card } from "react-native-paper";
import ip from '../ipCrud';

const BajaProducto = ({ navigation }) => {
    var url=`${ip.ip}busProductos`;
    
    
    const [loading,setLoading]=React.useState(false);
    const [productos,setProductos]=React.useState([]);
    var prod=[];
    //console.log("res "+ productos);
    React.useEffect(()=>{
        setLoading(true);
        api();
        //console.log(json);
        console.log(productos);
    },[]);
    async function api(){
        await fetch(url)
        .then((res) => res.json())
        .then((json) => {
            setProductos(json.data);
            prod=json.data;
            setLoading(false);
            console.log(json.data);
            console.log("res "+ productos);
            console.log(prod);
        });
    }
    const eliminar = ()=>{
        Alert.alert(
            "¿Esta seguro de eliminar el producto?",
            `Eliminara el producto con id: ${id}`,
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
        await fetch(`${ip.ip}delProd/${id}`)
        .then((res) => res.json())
        .then((json) => {
            setProductos(json.data);
            prod=json.data;
            setLoading(false);
            console.log(json.data);
            console.log("res "+ productos);
            console.log(prod);
        });
    }
    
    // Aqui declaro las variables que se usan en los inputs
    const [id, setId] = React.useState("");

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
                <Text style={styles.Title}>Baja Producto</Text>
            </View>
            <View >
                { loading ?
                    <ActivityIndicator  style={styles.loading} size="large"/>
                    : 
                    null
                }
                <View style={styles.productos}>
                            <ScrollView style={styles.row} horizontal>
                                 <Text style={styles.ProductoTxt}>Id</Text>
                                <Text style={styles.ProductoTxt}>Producto</Text>
                                <Text style={styles.ProductoTxt}>Categoria</Text>
                                <Text style={styles.ProductoTxt}>Descripcion</Text>
                                <Text style={styles.ProductoTxt}>Precio</Text>
                                <Text style={styles.ProductoTxt}>Restaurante</Text>
                            </ScrollView>
                </View>
                <FlatList
                    
                    data={productos}
                    renderItem={({item})=>(
                        <View style={styles.productos}>
                            <View style={styles.row}>
                            <Text style={styles.ProductoTxt}>{item.idShort}</Text>
                                <Text style={styles.ProductoTxt}>{item.nombre_producto}</Text>
                                <Text style={styles.ProductoTxt}>{item.categoria}</Text>
                                <Text style={styles.ProductoTxt}>{item.descripcion}</Text>
                                <Text style={styles.ProductoTxt}>{item.precio}</Text>
                                <Text style={styles.ProductoTxt}>{item.restaurante}</Text>
                            </View>
                        </View>
                    )}
                    
                    keyExtractor={item => item._id}
                 />
            </View>
            
            <ScrollView>
                <Card style={styles.card}>
                    {/* ACA EMPIEZA EL FORM CON SUS IMPUTS */}

                    <View><Text style={styles.Titletxt}>Introduce el ID del producto:</Text></View>

                    {/* ID */}
                    <TextInput onChangeText={(foo) => { setId(foo); }} value={id} placeholder={"ID"} keyboardType={"numeric"}
                        style={styles.forminput}
                    />

                    {/* BOTONES DE OPCIONES */}
                    <View style={styles.botones}>

                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.Regresar}>
                            <Text style={styles.btnTxt}>Regresar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.Enviar} onPress={eliminar}>
                            <Text style={styles.btnTxt}>Eliminar</Text>
                        </TouchableOpacity>
                    </View>

                </Card>
            </ScrollView>
        </View>
    )
};

export default BajaProducto;

// ESTILOS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    loading:{
        margin:160,
        color:"#00f"
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
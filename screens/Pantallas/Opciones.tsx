import React from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import InputMessage from "../../components/Chat/InputMessage";
import Mensaje from "../../components/Chat/Mensaje";
import io from "socket.io-client";
import * as Device from "expo-device";

const Opciones = () => {
  const [mensajes, setMensajes] = React.useState([]);
  const [socket, setSocket] = React.useState<any>({});

  const refScroll = React.useRef<any>();

  React.useEffect(() => {
    //Nos conectamos al socket
    let sock: any = io("http://m.rmaafs.com:3500");
    setSocket(sock);

    //Al recibir algún mensaje...
    sock.on("messages", (msg: any) => {
      setMensajes(msg);

      //Ponemos el scroll hasta abajo
      setTimeout(function () {
        refScroll.current.scrollToEnd({ animated: true });
      }, 500);
    });
  }, []);

  function submitChatMessage(text: string) {
    //Creamos el objeto que será enviado al socket.
    let msg = {
      autor: Device.deviceName,
      texto: text,
      fecha: getDateFormat(),
    };
    socket.emit("new-message", msg);
  }

  function getDateFormat() {
    let date = new Date();
    let hours = date.getHours();
    let minutes: any = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  return (
    <View style={styles.container}>
      <View style={styles.stack}>
        <Text style={styles.Title}>Soporte en vivo</Text>
      </View>

      <ScrollView
        ref={refScroll}
        style={{
          width: "100%",
        }}
      >
        {mensajes &&
          mensajes.map((msg: any, i: number) => {
            return [<Mensaje mensaje={msg} key={i} />];
          })}
      </ScrollView>

      <View style={{ paddingBottom: 70 }}></View>

      <View
        style={{
          width: "100%",
          height: 64,
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        <InputMessage
          onSubmit={(text: string) => submitChatMessage(text)}
          onFocus={() => {
            //Ponemos el scroll hasta abajo cuando demos click al input
            setTimeout(function () {
              refScroll.current.scrollToEnd({ animated: true });
            }, 500);
          }}
        />
      </View>
    </View>
  );
};

export default Opciones;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
  },

  Title: {
    fontSize: 25,
    alignSelf: "center",
    alignContent: "center",
    fontWeight: "bold",
    color: "#fff",
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
});

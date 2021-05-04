import React, { useState } from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { View } from "../../components/Themed";
import FechaButton from "../../components/Graficas/FechaButton";
import { LineChart, XAxis, Grid, YAxis } from "react-native-svg-charts";

export default function GraficasScreen(props: any) {
  const dataHoy = [100, 500, 350, 500, 400, 100, 500, 350, 500, 400, 500, 400];
  const dataSemana = [700, 500, 550, 600, 530, 800, 600];
  const dataMes = [1800, 2400, 1300, 2000];
  const dataAnio = [
    3000,
    2000,
    4000,
    2800,
    3500,
    2300,
    3000,
    3500,
    2900,
    3100,
    3100,
    2500,
  ];

  const [selected, setSelected] = useState(3);
  const [minimo, setMinimo] = useState("$4,256");
  const [maximo, setMaximo] = useState("$2,000");
  const [data, setData] = useState(dataAnio);

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "transparent",
          flexDirection: "row",
        }}
      >
        <FechaButton
          selected={selected}
          setSelected={setSelected}
          text={"Hoy"}
          id={0}
          onPress={() => {
            setData(dataHoy);
            setMaximo("$3,000");
            setMinimo("$1,000");
          }}
        />

        <FechaButton
          selected={selected}
          setSelected={setSelected}
          text={"Semana"}
          id={1}
          onPress={() => {
            setData(dataSemana);
            setMaximo("$3,000");
            setMinimo("$1,000");
          }}
        />

        <FechaButton
          selected={selected}
          setSelected={setSelected}
          text={"Mes"}
          id={2}
          onPress={() => {
            setData(dataMes);
            setMaximo("$3,000");
            setMinimo("$1,000");
          }}
        />

        <FechaButton
          selected={selected}
          setSelected={setSelected}
          text={"Año"}
          id={3}
          onPress={() => {
            setData(dataAnio);
            setMaximo("$3,000");
            setMinimo("$1,000");
          }}
        />
      </View>

      <View style={styles.card}>
        <View
          style={{
            width: "50%",
          }}
        >
          <Text style={styles.header}>Menor: {minimo}</Text>
        </View>

        <View
          style={{
            width: "50%",
          }}
        >
          <Text style={styles.header}>Mayor: {maximo}</Text>
        </View>

        <View
          style={{
            width: "100%",
            height: 200,
            flexDirection: "row",
            marginTop: 20,
          }}
        >
          <YAxis
            data={data}
            contentInset={{ top: 5, bottom: 9 }}
            svg={{
              fill: "grey",
              fontSize: 8,
            }}
            formatLabel={(value: any) => `$${value}`}
          />
          <LineChart
            style={{ flex: 1, marginLeft: 5 }}
            data={data}
            contentInset={{ top: 5, bottom: 9, right: 10 }}
            svg={{ stroke: "#47A7EA" }}
          >
            <Grid />
          </LineChart>
        </View>

        <View
          style={{
            width: "100%",
          }}
        >
          <XAxis
            style={{ marginHorizontal: 0 }}
            data={data}
            formatLabel={(value: any, index: any) => index + 1}
            contentInset={{ left: 28, right: 10 }}
            svg={{ fontSize: 10, fill: "gray" }}
          />
        </View>

        <View
          style={{
            width: "100%",
            paddingTop: 20,
          }}
        >
          <Text style={styles.footer}>Gráfica basada en ventas</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F6F7FB",
    paddingTop: 70,
    width: "100%",
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 10,
    padding: 15,
    marginTop: 20,

    //Shadows
    elevation: 3,
  },
  header: {
    color: "#9696AC",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    color: "#9696AC",
    fontSize: 12,
    padding: 10,
  },
});

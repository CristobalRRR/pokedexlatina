import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TypeIcon from "../components/TypeIcon";
import ClassIcon from "../components/ClassIcon";

export default function MovesDetailsScreen({ route }) {
  const { move } = route.params;
  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.textStyle}>Nombre: {move.spanish_name}</Text>

      <Text style={styles.textStyle}>
        Tipo: <TypeIcon type={move.type} />
      </Text>
      <Text style={styles.textStyle}>
        Clase: <ClassIcon damage_class={move.damage_class} />
      </Text>
      <Text style={styles.textStyle}>Potencia: {move.power}</Text>
      <Text style={styles.textStyle}>Precision: {move.accuracy}%</Text>
      <Text style={styles.textStyle}>PP: {move.pp}</Text>
      <Text style={styles.textStyle}>Efecto: {move.spanish_text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    textStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

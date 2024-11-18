import React from "react";
import { View, Text } from "react-native";
import TypeIcon from "../components/TypeIcon";
export default function PokemonDetailScreen({ route }) {
  const { pokemon } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>N°{pokemon.id}</Text>
      <Text>
        Nombre: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Text>
      {/*Se usa charAt(0).toUpperCase para hacer la primera mayuscula y slice para unir desde el segundo caracter*/}
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {pokemon.types.map((type) => (
          <TypeIcon key={type} type={type} />
        ))}
      </View>
      <Text>Estadísticas: {pokemon.stats.name}</Text>
      <Text>Habilidad: {pokemon.ability_spanish}</Text>
      {/* Faltan detalles */}
    </View>
  );
}

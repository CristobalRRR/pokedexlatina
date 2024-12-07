import React from "react";
import { View, Image, Text } from "react-native";
import TypeIconDetails from "../components/TypeIconDetails";
import styles from "../styles/HomeStyles";
export default function PokemonDetailScreen({ route }) {
  const { pokemon } = route.params;

  return (
    <View style={{ padding: 5}}>
      <View style = {styles.pokemonDetailsHeader}>
      <Image source={{ uri: pokemon.image}} style={styles.pokemonDetailsImage}/>
      <View style={styles.pokemonDetailsHeaderText}>
      <Text style={styles.pokemonDetailsId}>N°{pokemon.id}</Text>
      <Text style={styles.pokemonDetailsName}>
        Nombre: {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </Text>
      {/*Se usa charAt(0).toUpperCase para hacer la primera mayuscula y slice para unir desde el segundo caracter*/}
      </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={styles.pokemonDetailsText}>Tipo: </Text>
        {pokemon.types.map((type) => (
          <TypeIconDetails key={type} type={type} />
        ))}
      </View>
      <Text style={styles.pokemonDetailsText}>Habilidad: {pokemon.ability_spanish}</Text>
      <Text style={styles.pokemonDetailsText}>Especie: </Text>
      <Text style={styles.pokemonDetailsText}>Estadísticas: {pokemon.stats.name}</Text>
    </View>
  );
}

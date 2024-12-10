import React from "react";
import { View, Image, Text, ScrollView } from "react-native";
import TypeIconDetails from "../components/TypeIconDetails";
import styles from "../styles/HomeStyles";

export default function PokemonDetailScreen({ route }) {
  const { pokemon } = route.params;

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 10 }}>
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
      <Text style={styles.pokemonDetailsText}>Habilidad: {pokemon.normal_ability}</Text>
      <Text style={styles.pokemonDetailsText}>Habilidad oculta: {pokemon.hidden_ability}</Text>
      <Text style={styles.pokemonDetailsText}>Especie: {pokemon.flavor_text}</Text>
      <Text style={styles.pokemonDetailsText}>Estadísticas:</Text>
      <View>
        {pokemon.stats.map((stat, index) => (
          <Text key={index} style={styles.pokemonDetailsText}>
            {stat.label}: {stat.value}
          </Text>
        ))}
      </View>
      </ScrollView>
  );
}

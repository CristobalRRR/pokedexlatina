import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  } from "react-native";
import styles from '../styles/HomeStyles';
import { fetchPokemonData } from '../data/PokemonData';
import { fetchCaptured } from '../data/CapturedData';
import { URL_FIREBASE } from "@env";
import TypeIcon from "../components/TypeIcon";

const URL = URL_FIREBASE;

export default function CapturedScreen() {
  const [capturedPokemon, setCapturedPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const CapturedData = await fetchCaptured();
        const data = await fetchPokemonData();
        const filteredCaptured = data.filter(
          (pokemon) => !!favoritesData?.[pokemon.id]?.favorite
        );

        setCapturedPokemon(filteredCaptured);
      } catch (error) {
        Alert.alert("Error", "No se pudieron cargar los datos de Pokémon");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={capturedPokemon} // Usar la lista filtrada
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.pokemonItem}>
            <Text style={styles.pokemonid}>#{item.id}</Text>
            <Image source={{ uri: item.image }} style={styles.pokemonImage} />
            <View style={styles.pokemonDetails}>
              <Text style={styles.pokemonName}>
                {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {item.types.map((type) => (
                    <TypeIcon key={type} type={type} />
                  ))}
                </View>
              <TouchableOpacity>
                <Text style={styles.favoriteTrue}>★</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

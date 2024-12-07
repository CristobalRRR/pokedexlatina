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
import { useIsFocused } from "@react-navigation/native";

const URL = URL_FIREBASE;

export default function CapturedScreen() {
  const [capturedPokemon, setCapturedPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      loadData();
    }
  }, [isFocused]);

  const loadData = async () => {
    setLoading(true);
    try {
      const capturedData = await fetchCaptured();
      const data = await fetchPokemonData();
      const filteredCaptured = data.filter(
        (pokemon) => !!capturedData?.[pokemon.id]?.captured
      );
      const updatedData = filteredCaptured.map((pokemon) => ({
        ...pokemon,
        captured: !!capturedData?.[pokemon.id]?.captured,
      }));
      setCapturedPokemon(updatedData);
    } catch (error) {
      console.error("Error", "No se pudieron cargar los datos de Pokémon");
    } finally {
      setLoading(false);
    }
  };

  const toggleCaptured = async (pokemonId, isCaptured) => {
    try {
      await axios.patch(`${URL}/captured/${pokemonId}.json`, {
        captured: isCaptured,
      });
      setCapturedPokemon((prevData) =>
        prevData.map((pokemon) =>
          pokemon.id === pokemonId
            ? { ...pokemon, captured: isCaptured }
            : pokemon
        )
      );
    } catch (error) {
      console.error("Error al actualizar los capturados:", error);
    }
  };

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
              <TouchableOpacity
                  onPress={() => toggleCaptured(item.id, !item.captured)}
                >
                  <Text
                    style={ item.captured ? styles.capturedTrue : styles.capturedFalse}
                  >
                    {item.captured ? "✅" : "⬜"}
                  </Text>
                </TouchableOpacity>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

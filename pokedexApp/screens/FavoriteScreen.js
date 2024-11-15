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
import { fetchFavorites } from "../data/FavoriteData";
import { URL_FIREBASE } from "@env";
import TypeIcon from "../components/TypeIcon";

const URL = URL_FIREBASE;

export default function FavoriteScreen() {
  const [favoritePokemon, setFavoritePokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const favoritesData = await fetchFavorites();
        const data = await fetchPokemonData();
        const filteredFavorites = data.filter(
          (pokemon) => !!favoritesData?.[pokemon.id]?.favorite
        );
        const updatedData = filteredFavorites.map((pokemon) => ({
          ...pokemon,
          favorite: !!favoritesData?.[pokemon.id]?.favorite,
        }));
        setFavoritePokemon(updatedData);
      } catch (error) {
        Alert.alert("Error", "No se pudieron cargar los datos de Pokémon");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const toggleFavorite = async (pokemonId, isFavorite) => {
    try {
      await axios.patch(`${URL}/favorites/${pokemonId}.json`, {
        favorite: isFavorite,
      });
      setFavoritePokemon((prevData) =>
        prevData.map((pokemon) =>
          pokemon.id === pokemonId
            ? { ...pokemon, favorite: isFavorite }
            : pokemon
        )
      );
    } catch (error) {
      console.error("Error al actualizar el favorito:", error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={favoritePokemon} // Usar la lista filtrada
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
                  onPress={() => toggleFavorite(item.id, !item.favorite)}
                >
                  <Text
                    style={ item.favorite ? styles.favoriteTrue : styles.favoriteFalse}
                  >
                    {item.favorite ? "★" : "☆"}
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

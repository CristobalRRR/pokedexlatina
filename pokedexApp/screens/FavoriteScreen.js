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
import { fetchMoveData } from "../data/MoveData";
import { fetchPokemonData } from '../data/PokemonData';


export default function FavoriteScreen() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const favoritesData = await fetchFavorites();
        const data = await fetchPokemonData();
        const updatedData = data.map((pokemon) => ({
          ...pokemon,
          favorite: !!favoritesData?.[pokemon.id]?.favorite,
        }));

        setPokemonData(updatedData);
      } catch (error) {
        Alert.alert("Error", "No se pudieron cargar los datos de Pokémon");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  return (
    <FlatList
      data={favoritePokemons}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 20, borderBottomWidth: 1 }}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}

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
import { URL_FIREBASE } from "@env";

export default function CapturedScreen() {
  const capturedPokemons = PokemonData.filter(pokemon => pokemon.captured);

  const fetchFavorites = async () => {
    try {
      const response = await axios.get(`${URL}/favorites.json`);
      const favoritesData = response.data;
      console.log("Datos de favoritos:", favoritesData);
      return favoritesData;
    } catch (error) {
      console.error("Error al obtener los favoritos:", error);
      return null;
    }
  };

  return (
    <FlatList
      data={capturedPokemons}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 20, borderBottomWidth: 1 }}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}

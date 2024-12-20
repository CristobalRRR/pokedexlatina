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
import styles from "../styles/HomeStyles";
import { fetchPokemonData } from "../data/PokemonData";
import { fetchFavorites } from "../data/FavoriteData";
import { fetchCaptured } from "../data/CapturedData";
import { URL_FIREBASE } from "@env";
import TypeIcon from "../components/TypeIcon";
import { useIsFocused } from "@react-navigation/native";

const URL = URL_FIREBASE;

export default function HomeScreen({ navigation }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  const [description, setDescription]= useState([]);

  useEffect(() => {
    if (isFocused) {
      loadData();
    }
  }, [isFocused]);

  const loadData = async () => {
    setLoading(true);
    try {
      const favoritesData = await fetchFavorites();
      const capturedData = await fetchCaptured();
      const data = await fetchPokemonData();
      //const descriptionData = await getPokemonDescription();
      const updatedData = data.map((pokemon) => ({
        ...pokemon,
        favorite: !!favoritesData?.[pokemon.id]?.favorite,
        captured: !!capturedData?.[pokemon.id]?.captured,
      }));
      setPokemonData(updatedData);
    } catch (error) {
      Alert.alert("Error", "No se pudieron cargar los datos de Pokémon");
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = async (pokemonId, isFavorite) => {
    try {
      await axios.patch(`${URL}/favorites/${pokemonId}.json`, {
        favorite: isFavorite,
      });
      setPokemonData((prevData) =>
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

  const toggleCaptured = async (pokemonId, isCaptured) => {
    try {
      await axios.patch(`${URL}/captured/${pokemonId}.json`, {
        captured: isCaptured,
      });
      setPokemonData((prevData) =>
        prevData.map((pokemon) =>
          pokemon.id === pokemonId
            ? { ...pokemon, captured: isCaptured }
            : pokemon
        )
      );
    } catch (error) {
      console.error("Error al actualizar el favorito:", error);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonData}
        dataDescription={description}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PokemonDetail", { pokemon: item })
            }
          >
            <View style={styles.pokemonItem}>
              <Text style={styles.pokemonid}>#{item.id}</Text>
              <Image source={{ uri: item.image }} style={styles.pokemonImage} />
              <View style={styles.pokemonDetails}>
                <Text style={styles.pokemonName}>
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </Text>
                {/* <Text>{item.types.join(', ')}</Text> */}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {item.types.map((type) => (
                    <TypeIcon key={type} type={type} />
                  ))}
                </View>
                <TouchableOpacity
                  onPress={() => toggleFavorite(item.id, !item.favorite)}
                >
                  <Text
                    style={
                      item.favorite ? styles.favoriteTrue : styles.favoriteFalse
                    }
                  >
                    {item.favorite ? "★" : "☆"}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => toggleCaptured(item.id, !item.captured)}
                >
                  <Text
                    style={
                      item.captured ? styles.capturedTrue : styles.capturedFalse
                    }
                  >
                    {item.captured ? "✅" : "⬜"}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

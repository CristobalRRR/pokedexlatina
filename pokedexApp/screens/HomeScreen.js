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
import { fetchPokemonData } from "../data/PokemonData";
import {URL_FIREBASE} from "@env";
//import PokemonData from '../data/PokemonData';

const URL = URL_FIREBASE;

/*export default function HomeScreen({ navigation }) {
  return (
    <FlatList
      data={PokemonData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('PokemonDetail', { pokemon: item })}>
          <View style={{ padding: 20, borderBottomWidth: 1 }}>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
*/

export default function HomeScreen({ navigation }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchPokemonData();
        setPokemonData(data);
      } catch (error) {
        Alert.alert("Error", "No se pudieron cargar los datos de Pokémon");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Función para marcar o desmarcar un Pokémon como favorito
  const toggleFavorite = async (pokemonId, isFavorite) => {
    try {
      await axios.patch(`${URL}/favorites/${pokemonId}.json`, { favorite: isFavorite });
      setPokemonData((prevData) =>
        prevData.map((pokemon) =>
          pokemon.id === pokemonId ? { ...pokemon, favorite: isFavorite } : pokemon
        )
      );
    } catch (error) {
      console.error('Error al actualizar el favorito:', error);
    }
  };
  
  const fetchFavorites = async () => {
    try {
      const response = await axios.get(`${URL}/favorites.json`);
      const favoritesData = response.data;
      console.log('Datos de favoritos:', favoritesData);
      return favoritesData;
    } catch (error) {
      console.error('Error al obtener los favoritos:', error);
      return null;
    }
  };

  // Eliminar un Pokémon de la lista de favoritos
  const deleteFavorite = async (pokemonId) => {
    try {
      await axios.delete(`${URL}/favorites/${pokemonId}.json`);
      console.log('Favorito eliminado en Firebase');
    } catch (error) {
      console.error('Error al eliminar el favorito:', error);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('PokemonDetail', { pokemon: item })}>
            <View style={styles.pokemonItem}>
              <Image source={{ uri: item.image }} style={styles.pokemonImage} />
              <View style={styles.pokemonDetails}>
                <Text style={styles.pokemonName}>{item.name}</Text>
                <Text>{item.types.join(', ')}</Text>
                <TouchableOpacity onPress={() => toggleFavorite(item.id, !item.favorite)}>
                  <Text style={{ color: item.favorite ? 'gold' : 'gray' }}>
                    {item.favorite ? '★' : '☆'} Favorito
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  pokemonItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  pokemonImage: {
    width: 50,
    height: 50,
  },
  pokemonDetails: {
    marginLeft: 10,
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

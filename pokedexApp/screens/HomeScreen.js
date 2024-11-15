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
import { URL_FIREBASE } from "@env";

import BugIcon from "../assets/pokemonTypes/bug.png";
import DarkIcon from "../assets/pokemonTypes/dark.png";
import DragonIcon from "../assets/pokemonTypes/dragon.png";
import ElectricIcon from "../assets/pokemonTypes/electric.png";
import FairyIcon from "../assets/pokemonTypes/fairy.png";
import FightingIcon from "../assets/pokemonTypes/fighting.png";
import FireIcon from "../assets/pokemonTypes/fire.png";
import FlyingIcon from "../assets/pokemonTypes/flying.png";
import GhostIcon from "../assets/pokemonTypes/ghost.png";
import GrassIcon from "../assets/pokemonTypes/grass.png";
import GroundIcon from "../assets/pokemonTypes/ground.png";
import IceIcon from "../assets/pokemonTypes/ice.png";
import NormalIcon from "../assets/pokemonTypes/normal.png";
import PoisonIcon from "../assets/pokemonTypes/poison.png";
import PsychicIcon from "../assets/pokemonTypes/psychic.png";
import RockIcon from "../assets/pokemonTypes/rock.png";
import SteelIcon from "../assets/pokemonTypes/steel.png";
import WaterIcon from "../assets/pokemonTypes/water.png";

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

  // Función para marcar o desmarcar un Pokémon como favorito
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

  // Eliminar un Pokémon de la lista de favoritos
  const deleteFavorite = async (pokemonId) => {
    try {
      await axios.delete(`${URL}/favorites/${pokemonId}.json`);
      console.log("Favorito eliminado en Firebase");
    } catch (error) {
      console.error("Error al eliminar el favorito:", error);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  function TypeIcon({ type }) {
    switch (type) {
      case "fire":
        return (
          <Image
            source={FireIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "bug":
        return (
          <Image
            source={BugIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "electric":
        return (
          <Image
            source={ElectricIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "dark":
        return (
          <Image
            source={DarkIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "dragon":
        return (
          <Image
            source={DragonIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "fairy":
        return (
          <Image
            source={FairyIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "fighting":
        return (
          <Image
            source={FightingIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "flying":
        return (
          <Image
            source={FlyingIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "ghost":
        return (
          <Image
            source={GhostIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "ground":
        return (
          <Image
            source={GroundIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "ice":
        return (
          <Image
            source={IceIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "normal":
        return (
          <Image
            source={NormalIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "grass":
        return (
          <Image
            source={GrassIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "poison":
        return (
          <Image
            source={PoisonIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "psychic":
        return (
          <Image
            source={PsychicIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "rock":
        return (
          <Image
            source={RockIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "steel":
        return (
          <Image
            source={SteelIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "water":
        return (
          <Image
            source={WaterIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      default:
        return null;
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonData}
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
                    style={ item.favorite ? styles.favoriteTrue : styles.favoriteFalse}
                  >
                    {item.favorite ? "★" : "☆"}
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
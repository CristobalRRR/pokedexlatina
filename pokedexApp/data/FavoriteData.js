import axios from "axios";
import { URL_FIREBASE } from "@env";

const URL = URL_FIREBASE;

// Función para marcar o desmarcar un Pokémon como favorito

export const fetchFavorites = async () => {
    try {
      const response = await axios.get(`${URL}/favorites.json`);
      const favoritesData = response.data;
      return favoritesData;
    } catch (error) {
      console.error("Error al obtener los favoritos:", error);
      return null;
    }
  };

  // Eliminar un Pokémon de la lista de favoritos
/* export const deleteFavorite = async (pokemonId) => {
    try {
      await axios.delete(`${URL}/favorites/${pokemonId}.json`);
      console.log("Favorito eliminado en Firebase");
    } catch (error) {
      console.error("Error al eliminar el favorito:", error);
    }
  }; */
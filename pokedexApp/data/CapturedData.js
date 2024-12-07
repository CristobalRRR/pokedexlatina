import axios from "axios";
import { URL_FIREBASE } from "@env";

const URL = URL_FIREBASE;

// Función para marcar o desmarcar un Pokémon como favorito

export const fetchCaptured = async () => {
    try {
      const response = await axios.get(`${URL}/captured.json`);
      const capturedData = response.data;
      return capturedData;
    } catch (error) {
      console.error("Error al obtener los capturados:", error);
      return null;
    }
  };

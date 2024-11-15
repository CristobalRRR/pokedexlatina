import axios from "axios";
import { URL_POKEAPI } from "@env";
import { Accuracy } from "expo-location";

// URL base de PokeAPI
const API = URL_POKEAPI;

export async function fetchMoveData(limit = 255) {
  try {
    // Llamada a la API
    const response = await axios.get(`${API}/move?limit=${limit}`);
    const moveList = response.data.results;
    const moveData = await Promise.all(
      moveList.map(async (move) => {
        const moveDetails = await axios.get(move.url);

        return {
          id: moveDetails.data.id,

          //El nombre en espanol viene como JSON anidado, por lo que hay que llamar
          //al atributo dentro de otra lista, en este caso el movimiento en un idioma especifico
          spanish_name: moveDetails.data.names.find(
            (entry) => entry.language.name === "es"
          ).name,

          type: moveDetails.data.type.name,
          damage_class: moveDetails.data.damage_class.name,
          power: moveDetails.data.power,
          accuracy: moveDetails.data.accuracy,
          pp: moveDetails.data.pp,
          spanish_text: moveDetails.data.flavor_text_entries.find(
            (entry)=> entry.language.name === "es"
          ).flavor_text,
        };
      })
    );
    return moveData;
  } catch (error) {
    console.error("Error al obenter datos:", error);
    return [];
  }
}

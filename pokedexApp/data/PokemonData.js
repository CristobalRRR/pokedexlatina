import axios from 'axios';
import { URL_POKEAPI } from '@env';

// URL base de PokeAPI
const API = URL_POKEAPI;

// Función para obtener el texto en español de flavor_text_entries
async function getFlavorText(speciesUrl) {
  try {
    const speciesResponse = await axios.get(speciesUrl); // Llamada al endpoint de species
    const flavorTextEntries = speciesResponse.data.flavor_text_entries.find(
      (entry) => entry.language.name === "es"
    );
    return flavorTextEntries ? flavorTextEntries.flavor_text.replace(/\n|\f/g, ' ') : "Descripción no disponible";
  } catch (error) {
    console.error('Error fetching flavor text:', error);
    return "Descripción no disponible";
  }
}

// Función para obtener datos de los primeros 151 Pokémon
export async function fetchPokemonData(limit = 151) {
  try {
    // Solicita una lista de Pokémon con los detalles mínimos (nombre y URL)
    const response = await axios.get(`${API}/pokemon?limit=${limit}`);
    const pokemonList = response.data.results;

    // Itera sobre cada Pokémon y obtiene sus detalles completos
    const pokemonData = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const pokemonDetails = await axios.get(pokemon.url);

        // Obtén el texto en español para la versión red
        const flavorText = await getFlavorText(pokemonDetails.data.species.url);

        return {
          id: pokemonDetails.data.id,
          name: pokemonDetails.data.name,
          ability_spanish: pokemonDetails.data.abilities.map((ability) => ability.ability.name),
          image: pokemonDetails.data.sprites.front_default, // Imagen del Pokémon
          types: pokemonDetails.data.types.map((type) => type.type.name), // Tipos del Pokémon
          stats: pokemonDetails.data.stats.map((stat) => ({
            name: stat.stat.name,
            value: stat.base_stat,
          })),
          flavor_text: flavorText, // Texto descriptivo en español y versión red
        };
      })
    );

    return pokemonData;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    return [];
  }
}

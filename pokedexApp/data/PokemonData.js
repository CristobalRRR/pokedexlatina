import axios from 'axios';

// URL base de PokeAPI
const POKE_API_URL = 'https://pokeapi.co/api/v2';

// Función para obtener datos de los primeros 151 Pokémon
export async function fetchPokemonData(limit = 151) {
  try {
    // Solicita una lista de Pokémon con los detalles mínimos (nombre y URL)
    const response = await axios.get(`${POKE_API_URL}/pokemon?limit=${limit}`);
    const pokemonList = response.data.results;

    // Itera sobre cada Pokémon y obtiene sus detalles completos
    const pokemonData = await Promise.all(
      pokemonList.map(async (pokemon) => {
        const pokemonDetails = await axios.get(pokemon.url);
        return {
          id: pokemonDetails.data.id,
          name: pokemonDetails.data.name,
          image: pokemonDetails.data.sprites.front_default, // Imagen del Pokémon
          types: pokemonDetails.data.types.map((type) => type.type.name), // Tipos del Pokémon
          captured: false,// no viene en la api
          favorite: false,
          stats: pokemonDetails.data.stats.map((stat) => ({
            name: stat.stat.name,
            base_stat: stat.base_stat,
          })), // Estadísticas del Pokémon
        };
      })
    );

    return pokemonData;
  } catch (error) {
    console.error('Error fetching Pokémon data:', error);
    return [];
  }
}



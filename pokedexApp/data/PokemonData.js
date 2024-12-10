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
    console.error('Error al obtener descripcion:', error);
    return "Descripción no disponible";
  }
}

async function getAbility(abilityUrl) {
  try {
    const abilityResponse = await axios.get(abilityUrl); // Llamada al endpoint de species
    const abilityEntries = abilityResponse.data.names.find(
      (entry) => entry.language.name === "es"
    );
    return abilityEntries ? abilityEntries.name.replace(/\n|\f/g, ' ') : "Habilidad no disponible";
  } catch (error) {
    console.error('Error al obtener habilidad:', error);
    return "Habilidad no disponible";
  }
}

async function getHiddenAbilities(abilities) {
  try {
    // Filtrar las habilidades ocultas (is_hidden: true)
    const hiddenAbilities = abilities.filter((ability) => ability.is_hidden);

    // Obtener las habilidades ocultas en español
    const hiddenAbilitiesNames = await Promise.all(
      hiddenAbilities.map(async (ability) => {
        const abilityResponse = await axios.get(ability.ability.url); // Llamada a la API
        const abilityEntry = abilityResponse.data.names.find(
          (entry) => entry.language.name === "es"
        );
        return abilityEntry ? abilityEntry.name.replace(/\n|\f/g, ' ') : "Habilidad no disponible";
      })
    );

    return hiddenAbilitiesNames; // Devuelve un array con los nombres de las habilidades ocultas
  } catch (error) {
    console.error('Error al obtener habilidades ocultas:', error);
    return ["Habilidad no disponible"];
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
        const flavorText = await getFlavorText(pokemonDetails.data.species.url);
        const normal_abilities = await getAbility(pokemonDetails.data.abilities[0].ability.url);
        const hidden_abilities = await getHiddenAbilities(pokemonDetails.data.abilities);
        const allStats = pokemonDetails.data.stats.map((stat) => {
          let statLabel = ""; // Etiqueta personalizada
          switch (stat.stat.name) {
            case "attack":
              statLabel = "Ataque";
              break;
            case "defense":
              statLabel = "Defensa";
              break;
            case "special-attack":
              statLabel = "Ataque Especial";
              break;
            case "special-defense":
              statLabel = "Defensa Especial";
              break;
            case "speed":
              statLabel = "Velocidad";
              break;
            case "hp":
              statLabel = "HP";
              break;
            default:
              statLabel = stat.stat.name; // En caso de un valor inesperado
          }
          return {
            label: statLabel,
            value: stat.base_stat,
          };
        });
        
        return {
          id: pokemonDetails.data.id,
          name: pokemonDetails.data.name,
          //ability_spanish: abilities,
          normal_ability: normal_abilities,
          hidden_ability: hidden_abilities,
          image: pokemonDetails.data.sprites.front_default, // Imagen del Pokémon
          types: pokemonDetails.data.types.map((type) => type.type.name), // Tipos del Pokémon
          stats: allStats,
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

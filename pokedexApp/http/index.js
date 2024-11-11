import axios from "axios";

const URL = "";// http de firebase bd

/* export function saveFav(fav, uuid) {
    axios.post(`${URL}/favorites/${uuid}.json`, fav);
  }
export function removeFav(id, uuid) {
// axios.delete( URL+"/tareas/"+id+".json");
axios.delete(`${URL}/favorites/${uuid}/${id}.json`);
}

  
export function updateFav(id, task, uuid) {
    //axios.put( URL+"/tareas/"+id+".json" ,task);
    axios.put(`${URL}/favorites/${uuid}/${id}.json`, task);
    }

export async function getFavs(uuid) {
    const response = await axios.get(`${URL}/favorites/${uuid}.json`);
    
    const favorites = [];
    
    for (const key in response.data) {
        const obj = {
        id: key,
        name: response.data[key].name,
        };
        favorites.push(obj);
    }
    return favorites;
    }
 */

    
async function markAsCaptured(userId, pokemonId) {
  try {
    await axios.put(
      `${URL}/users/${userId}/capturedPokemons/${pokemonId}.json`,
      true
    );
    console.log(`Pokémon ${pokemonId} marcado como capturado.`);
  } catch (error) {
    console.error("Error marcando como capturado:", error);
  }
}

async function isPokemonCaptured(userId, pokemonId) {
  try {
    const response = await axios.get(
      `${URL}/users/${userId}/capturedPokemons/${pokemonId}.json`
    );
    return response.data === true;
  } catch (error) {
    console.error("Error verificando captura:", error);
    return false;
  }
}

async function unmarkAsCaptured(userId, pokemonId) {
  try {
    await axios.delete(
      `${URL}/users/${userId}/capturedPokemons/${pokemonId}.json`
    );
    console.log(`Pokémon ${pokemonId} eliminado de capturados.`);
  } catch (error) {
    console.error("Error eliminando de capturados:", error);
  }
}

async function markAsFavorite(userId, pokemonId) {
  try {
    await axios.put(
      `${URL}/users/${userId}/favoritePokemons/${pokemonId}.json`,
      true
    );
    console.log(`Pokémon ${pokemonId} marcado como favorito.`);
  } catch (error) {
    console.error("Error marcando como favorito:", error);
  }
}

async function isPokemonFavorite(userId, pokemonId) {
  try {
    const response = await axios.get(
      `${URL}/users/${userId}/favoritePokemons/${pokemonId}.json`
    );
    return response.data === true;
  } catch (error) {
    console.error("Error verificando favorito:", error);
    return false;
  }
}

async function unmarkAsFavorite(userId, pokemonId) {
  try {
    await axios.delete(
      `${URL}/users/${userId}/favoritePokemons/${pokemonId}.json`
    );
    console.log(`Pokémon ${pokemonId} eliminado de favoritos.`);
  } catch (error) {
    console.error("Error eliminando de favoritos:", error);
  }
}

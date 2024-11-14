import axios from "axios";
import {URL_FIREBASE} from '@env';

const URL = URL_FIREBASE;// http de firebase bd

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


import React from 'react';
import { View, Text, FlatList } from 'react-native';
//import PokemonData from '../data/PokemonData';
import { fetchPokemonData } from '../data/PokemonData';


export default function FavoriteScreen() {
  const favoritePokemons = PokemonData.filter(pokemon => pokemon.favorite);

  return (
    <FlatList
      data={favoritePokemons}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 20, borderBottomWidth: 1 }}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}

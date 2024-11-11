import React from 'react';
import { View, Text, FlatList } from 'react-native';
//import PokemonData from '../data/PokemonData';
import { fetchPokemonData } from '../data/PokemonData';

export default function CapturedScreen() {
  const capturedPokemons = PokemonData.filter(pokemon => pokemon.captured);// se debe actualizar ya que ahora no es una lista 

  return (
    <FlatList
      data={capturedPokemons}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 20, borderBottomWidth: 1 }}>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
}

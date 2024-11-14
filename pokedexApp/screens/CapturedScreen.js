import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchPokemonData } from '../data/PokemonData';

export default function CapturedScreen() {
  const capturedPokemons = PokemonData.filter(pokemon => pokemon.captured);

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

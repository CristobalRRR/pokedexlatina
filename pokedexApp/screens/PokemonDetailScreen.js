import React from 'react';
import { View, Text } from 'react-native';
import PokemonDetail from '../components/PokemonDetail';

export default function PokemonDetailScreen({ route }) {
  const { pokemon } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Nombre: {pokemon.name}</Text>
      <Text>Tipo: {pokemon.types}</Text>
      <Text>Estadísticas:</Text>
      {/* Faltan detalles */}
    </View>
  );
}

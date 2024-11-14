import React from 'react';
import { View, Text } from 'react-native';
import PokemonDetail from '../components/PokemonDetail';

export default function PokemonDetailScreen({ route }) {
  const { pokemon } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text>Nombre: {pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</Text>
      {/*Se usa charAt(0).toUpperCase para hacer la primera mayuscula y slice para unir desde el segundo caracter*/}
      <Text>Tipo: {pokemon.types}</Text>
      <Text>Estadísticas: {pokemon.stats.base_stats}</Text>
      {/* Faltan detalles */}
    </View>
  );
}

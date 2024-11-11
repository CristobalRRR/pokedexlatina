import React from 'react';
import { FlatList, View, Text } from 'react-native';
import MoveData from '../data/MoveData';

export default function MovesScreen() {
  return (
    <FlatList
      data={MoveData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 20, borderBottomWidth: 1 }}>
          <Text>{item.name}</Text>
          <Text>Tipo: {item.type}</Text>
          <Text>Potencia: {item.power}</Text>
        </View>
      )}
    />
  );
}

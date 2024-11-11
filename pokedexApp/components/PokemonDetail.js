/* import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function PokemonDetail({ route, userId }) {
  const { pokemon } = route.params;
  const [isCaptured, setIsCaptured] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    async function fetchStatus() {
      const captured = await isPokemonCaptured(userId, pokemon.id);
      const favorite = await isPokemonFavorite(userId, pokemon.id);
      setIsCaptured(captured);
      setIsFavorite(favorite);
    }
    fetchStatus();
  }, [userId, pokemon.id]);

  return (
    <View>
      <Text>{pokemon.name}</Text>
      <Text>{isCaptured ? 'Capturado' : 'No Capturado'}</Text>
      <Text>{isFavorite ? 'Favorito' : 'No Favorito'}</Text>
      <Button
        title={isCaptured ? 'Desmarcar Capturado' : 'Marcar como Capturado'}
        onPress={() => {
          if (isCaptured) {
            unmarkAsCaptured(userId, pokemon.id);
            setIsCaptured(false);
          } else {
            markAsCaptured(userId, pokemon.id);
            setIsCaptured(true);
          }
        }}
      />
      <Button
        title={isFavorite ? 'Desmarcar Favorito' : 'Marcar como Favorito'}
        onPress={() => {
          if (isFavorite) {
            unmarkAsFavorite(userId, pokemon.id);
            setIsFavorite(false);
          } else {
            markAsFavorite(userId, pokemon.id);
            setIsFavorite(true);
          }
        }}
      />
    </View>
  );
} */
import React, {useState, useEffect} from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { fetchPokemonData } from '../data/PokemonData';
//import PokemonData from '../data/PokemonData';

/*export default function HomeScreen({ navigation }) {
  return (
    <FlatList
      data={PokemonData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('PokemonDetail', { pokemon: item })}>
          <View style={{ padding: 20, borderBottomWidth: 1 }}>
            <Text>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
*/

export default function HomeScreen({ navigation }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const data = await fetchPokemonData();
      setPokemonData(data);
      setLoading(false);
    }

    loadData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('PokemonDetail', { pokemon: item })}>
            <View style={styles.pokemonItem}>
              <Image source={{ uri: item.image }} style={styles.pokemonImage} />
              <View style={styles.pokemonDetails}>
                <Text style={styles.pokemonName}>{item.name}</Text>
                <Text>{item.types.join(', ')}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  pokemonItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  pokemonImage: {
    width: 50,
    height: 50,
  },
  pokemonDetails: {
    marginLeft: 10,
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

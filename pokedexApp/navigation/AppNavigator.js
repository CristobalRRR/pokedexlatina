import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CapturedScreen from "../screens/CapturedScreen";
import FavoritesScreen from "../screens/FavoriteScreen";
import MovesScreen from "../screens/MovesScreen";
import PokemonDetailScreen from "../screens/PokemonDetailScreen";
import MapScreen from '../screens/MapScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetailScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Pokémon">
      <Drawer.Screen name="Pokémon" component={HomeStack} />
      <Drawer.Screen name="Capturados" component={CapturedScreen} />
      <Drawer.Screen name="Favoritos" component={FavoritesScreen} />
      <Drawer.Screen name="Movimientos" component={MovesScreen} />
      <Drawer.Screen name="Mapa" component={MapScreen} />
    </Drawer.Navigator>
  );
}

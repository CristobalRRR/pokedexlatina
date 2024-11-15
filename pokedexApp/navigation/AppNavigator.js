import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CapturedScreen from "../screens/CapturedScreen";
import FavoritesScreen from "../screens/FavoriteScreen";
import MovesScreen from "../screens/MovesScreen";
import PokemonDetailScreen from "../screens/PokemonDetailScreen";
import MapScreen from "../screens/MapScreen";
import MovesDetailsScreen from "../screens/MovesDetailsScreen";

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

function MoveStack() {
  return(<Stack.Navigator>
    <Stack.Screen name="Movimientos" component={MovesScreen} />
    <Stack.Screen name="MoveDetail" component={MovesDetailsScreen} />
  </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Pokémon">
      <Drawer.Screen name="Pokémon" component={HomeStack} />
      <Drawer.Screen name="Capturados" component={CapturedScreen} />
      <Drawer.Screen name="Favoritos" component={FavoritesScreen} />
      <Drawer.Screen name="Movimientos" component={MoveStack} />
      <Drawer.Screen name="Mapa" component={MapScreen} />
    </Drawer.Navigator>
  );
}

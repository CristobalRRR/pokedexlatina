import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  } from "react-native";
import { fetchMoveData } from "../data/MoveData";
//import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
  return (
    <MapView style={styles.map} initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}>
      {/* Ejemplo de marcador, reemplazar con ubicaciones de Pokémon */}
      <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="Pikachu" />
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
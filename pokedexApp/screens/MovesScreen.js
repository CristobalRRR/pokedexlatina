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
import TypeIcon from "../components/TypeIcon";
import ClassIcon from "../components/ClassIcon";

export default function MovesScreen({navigation}) {
  const [moveData, setMoveData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMoves() {
      try {
        const data = await fetchMoveData();
        setMoveData(data);
      } catch (error) {
        console.error("Error al cargar los datos de movimientos:", error);
      } finally {
        setLoading(false);
      }
    }
    loadMoves();
  }, []);
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={moveData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() =>
            navigation.navigate("MoveDetail", { move: item })
          }>
            <View style={styles.moveItem}>
              <View style={styles.moveCardIcon}>
              <TypeIcon type={item.type} />
              </View>
              <View style={styles.moveCardIcon}>
              <ClassIcon damage_class={item.damage_class}/>
              </View>
              <Text style={styles.moveName}>{item.spanish_name}</Text>
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
    backgroundColor: "#003153",
    padding: 10,
  },
  moveDetails: {
    marginLeft: 10,
  },
  moveItem: {
    flexDirection: "row",
    padding: 10,
    margin: 2,
    borderBottomWidth: 1,
    borderRadius: 4,
    backgroundColor: "#ddd",
    borderColor: "#fff",
  },
  moveName: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  moveCardIcon:{
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20
  }
});

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
import BugIcon from "../assets/pokemonTypes/bug.png";
import DarkIcon from "../assets/pokemonTypes/dark.png";
import DragonIcon from "../assets/pokemonTypes/dragon.png";
import ElectricIcon from "../assets/pokemonTypes/electric.png";
import FairyIcon from "../assets/pokemonTypes/fairy.png";
import FightingIcon from "../assets/pokemonTypes/fighting.png";
import FireIcon from "../assets/pokemonTypes/fire.png";
import FlyingIcon from "../assets/pokemonTypes/flying.png";
import GhostIcon from "../assets/pokemonTypes/ghost.png";
import GrassIcon from "../assets/pokemonTypes/grass.png";
import GroundIcon from "../assets/pokemonTypes/ground.png";
import IceIcon from "../assets/pokemonTypes/ice.png";
import NormalIcon from "../assets/pokemonTypes/normal.png";
import PoisonIcon from "../assets/pokemonTypes/poison.png";
import PsychicIcon from "../assets/pokemonTypes/psychic.png";
import RockIcon from "../assets/pokemonTypes/rock.png";
import SteelIcon from "../assets/pokemonTypes/steel.png";
import WaterIcon from "../assets/pokemonTypes/water.png";
import PhysicalIcon from "../assets/moveClass/physical.png";
import SpecialIcon from "../assets/moveClass/special.png";
import StatusIcon from "../assets/moveClass/status.png";

export default function MovesScreen() {
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

  function TypeIcon({ type }) {
    switch (type) {
      case "fire":
        return (
          <Image
            source={FireIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "bug":
        return (
          <Image
            source={BugIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "electric":
        return (
          <Image
            source={ElectricIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "dark":
        return (
          <Image
            source={DarkIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "dragon":
        return (
          <Image
            source={DragonIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "fairy":
        return (
          <Image
            source={FairyIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "fighting":
        return (
          <Image
            source={FightingIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "flying":
        return (
          <Image
            source={FlyingIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "ghost":
        return (
          <Image
            source={GhostIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "ground":
        return (
          <Image
            source={GroundIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "ice":
        return (
          <Image
            source={IceIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "normal":
        return (
          <Image
            source={NormalIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "grass":
        return (
          <Image
            source={GrassIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "poison":
        return (
          <Image
            source={PoisonIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "psychic":
        return (
          <Image
            source={PsychicIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "rock":
        return (
          <Image
            source={RockIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "steel":
        return (
          <Image
            source={SteelIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      case "water":
        return (
          <Image
            source={WaterIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
      default:
        return null;
    }
  }

  function ClassIcon({damage_class}){
    switch(damage_class){
      case "physical":
        return(
          <Image
            source={PhysicalIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
        case "special":
        return(
          <Image
            source={SpecialIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
        case "status":
        return(
          <Image
            source={StatusIcon}
            style={{
              width: 60,
              height: 30,
              resizeMode: "contain",
              marginRight: 4,
            }}
          />
        );
        default:
          return null;
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={moveData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
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

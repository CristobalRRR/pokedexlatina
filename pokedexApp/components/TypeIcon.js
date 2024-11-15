import React from "react";
import { Image } from "react-native";
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

export default function TypeIcon({ type }) {
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
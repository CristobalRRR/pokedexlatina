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

const styleIconDetails = {
  width: 130,
  height: 60,
  resizeMode: "contain",
  marginRight: 4,
};

export default function TypeIconDetails({ type }) {
  switch (type) {
    case "fire":
      return <Image source={FireIcon} style={{}} />;
    case "bug":
      return (
        <Image
          source={BugIcon}
          style={styleIconDetails}
        />
      );
    case "electric":
      return (
        <Image
          source={ElectricIcon}
          style={styleIconDetails}
        />
      );
    case "dark":
      return (
        <Image
          source={DarkIcon}
          style={styleIconDetails}
        />
      );
    case "dragon":
      return (
        <Image
          source={DragonIcon}
          style={styleIconDetails}
        />
      );
    case "fairy":
      return (
        <Image
          source={FairyIcon}
          style={styleIconDetails}
        />
      );
    case "fighting":
      return (
        <Image
          source={FightingIcon}
          style={styleIconDetails}
        />
      );
    case "flying":
      return (
        <Image
          source={FlyingIcon}
          style={styleIconDetails}
        />
      );
    case "ghost":
      return (
        <Image
          source={GhostIcon}
          style={styleIconDetails}
        />
      );
    case "ground":
      return (
        <Image
          source={GroundIcon}
          style={styleIconDetails}
        />
      );
    case "ice":
      return (
        <Image
          source={IceIcon}
          style={styleIconDetails}
        />
      );
    case "normal":
      return (
        <Image
          source={NormalIcon}
          style={styleIconDetails}
        />
      );
    case "grass":
      return (
        <Image
          source={GrassIcon}
          style={styleIconDetails}
        />
      );
    case "poison":
      return (
        <Image
          source={PoisonIcon}
          style={styleIconDetails}
        />
      );
    case "psychic":
      return (
        <Image
          source={PsychicIcon}
          style={styleIconDetails}
        />
      );
    case "rock":
      return (
        <Image
          source={RockIcon}
          style={styleIconDetails}
        />
      );
    case "steel":
      return (
        <Image
          source={SteelIcon}
          style={styleIconDetails}
        />
      );
    case "water":
      return (
        <Image
          source={WaterIcon}
          style={styleIconDetails}
        />
      );
    default:
      return null;
  }
}

import React from "react";
import { Image } from "react-native";
import PhysicalIcon from "../assets/moveClass/physical.png";
import SpecialIcon from "../assets/moveClass/special.png";
import StatusIcon from "../assets/moveClass/status.png";

export default function ClassIcon({damage_class}){
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
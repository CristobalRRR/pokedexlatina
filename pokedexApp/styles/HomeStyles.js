import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#003153",
      padding: 10,
    },
    pokemonItem: {
      flexDirection: "row",
      padding: 10,
      margin: 2,
      borderBottomWidth: 1,
      borderRadius: 4,
      backgroundColor: "#ddd",
      borderColor: "#fff",
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
      fontWeight: "bold",
    },
    pokemonid: {
      fontSize: 16,
    },
    favoriteTrue: {
      color: "gold",
      fontSize: 20,
      textShadowColor: "black",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
    },
    favoriteFalse: {
      color: "#070808",
      fontSize: 20,
      textShadowColor: "black",
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
    },
    pokemonDetailsImage:{
      width: 200,
      height: 200,
      alignSelf: "left",
      marginBottom: 5 
    },
    pokemonDetailsHeaderText:{
      flex: 1,
      fontSize: 25,
      fontWeight: "bold",
    },
    pokemonDetailsText:{
      fontSize: 25,
      fontWeight: "bold",
      padding: 5
    },
    pokemonDetailsId:{
      marginBottom: 5,
      fontSize: 25,
      fontWeight: "bold",
    },
    pokemonDetailsName:{
      fontSize: 25,
      fontWeight: "bold",
    },
    pokemonDetailsHeader:{
      flexDirection: "row",
      alignItems: "center"
      }
  });

  export default styles;
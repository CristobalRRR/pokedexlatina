import { Pressable, StyleSheet, View } from "react-native";

export default function FavoriteButton(props){
    return (
        <Pressable style={styles.container}>
            <Ionicons 
                name={props.name} 
                size={24} 
                color={props.color}
                onPress={props.onPress}
                />
        </Pressable>
    )
}

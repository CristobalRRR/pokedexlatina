import { Pressable, StyleSheet, View } from "react-native";

export default function CapturedButton(props){
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

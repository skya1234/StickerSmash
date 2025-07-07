import { Text, View, StyleSheet } from "react-native";

const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> About Screen </Text>
        </View>
    );
}

export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        color: "#fff",
    },
});
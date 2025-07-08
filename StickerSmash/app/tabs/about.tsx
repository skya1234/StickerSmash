import { Text, View, StyleSheet } from "react-native";

//creating a component called AboutScreen, which contains a View object with text
const AboutScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> About Screen </Text>
        </View>
    );
}

// allows other files to import the AboutScreen component so it can be used in other parts of the app
export default AboutScreen;
// creating a component called "Styles", which a react native StyleSheet
// allows us to define visual properties of different objects such as containers and text objects
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1c2833",
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        color: "#fff",
    },
});
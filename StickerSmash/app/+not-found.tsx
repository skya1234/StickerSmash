// the file name "+not-found.tsx" indicates that this file is used to handle routes that are not found automatically
import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

// Creating a component called NotFoundScreen, which contains a View object with text
// This component is used to display a message when the user navigates to a route that does
const NotFoundScreen = () => {
    return (
        <>
            <Stack.Screen options={{ title: "Oops! Not Found" }} />
            <View style={styles.container}>
                <Link href="/tabs" style={styles.button}>Back to home</Link>
            </View>
        </>
    );
};
// Allows other files to import the NotFoundScreen component so it can be used in other parts of the app
export default NotFoundScreen;

// Creating a component called "Styles", which is a react native StyleSheet
// Allows us to define visual properties of different objects such as containers and text objects
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
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff",
    },
});
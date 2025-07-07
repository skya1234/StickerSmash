import { View, StyleSheet } from "react-native";

import { Link, Stack } from "expo-router";

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

export default NotFoundScreen;
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
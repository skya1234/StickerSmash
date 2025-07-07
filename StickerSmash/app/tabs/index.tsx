// importing Text, View and StyleSheet objects from react native
import { Text, View, StyleSheet } from "react-native";
//allows us to use the Link component for our router
import { Link } from "expo-router";

//creating a component called Index, which contains a View object with text
const Index = () => {
  return (
    //create a view, and a text component inside it
    // use our style component to style these components on screen
    <View style={styles.container}>
      <Text style={styles.text}> Home Screen </Text>
      <Link href="/tabs/about" style={styles.button}>
        About Screen
      </Link>
    </View>
  );
}
//ensure that the Index Component Renders on the screen
export default Index;

//creating a component called "Styles", which a react native StyleSheet
// allows us to define visual properties of different objects
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
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

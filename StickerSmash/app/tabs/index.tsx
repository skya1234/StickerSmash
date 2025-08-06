// importing Text, View and StyleSheet objects from react native
import { Text, View, StyleSheet } from "react-native";
//allows us to use the Link component for our router
import { Link } from "expo-router";
import { Image } from "expo-image";
import ImageViewer from "@/components/ImageViewer";
const placeholderImage = require('@/assets/images/background-image.png');

//creating a component called Index, which contains a View object with text
const Index = () => {
  return (
    //create a view, and a text component inside it
    // use our style component to style these components on screen
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={placeholderImage} />
      </View>
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
    backgroundColor: '#1c2833',
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

  imageContainer: {
    flex: 1
  }
});

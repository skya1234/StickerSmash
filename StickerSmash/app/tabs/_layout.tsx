import { Stack, Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
// create a RootLayout Componenet with a Tab-bar component, adds buttons to the bottom of the screen
const RootLayout = () => {
    return (
        <Tabs
            // screenOptions prop allows us to set visual properties of the tab bar and header
            screenOptions={{
                tabBarActiveTintColor: "#58d68d",
                headerStyle: { backgroundColor: "#17202a" },
                headerShadowVisible: false,
                headerTintColor: "#fff",
                tabBarStyle: { backgroundColor: "#17202a" },
            }}>
            <Tabs.Screen name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    )
                }} />

            <Tabs.Screen name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                    )
                }} />
        </Tabs>
    );
}

export default RootLayout;

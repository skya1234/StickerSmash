import { Stack } from "expo-router";

// This is the root layout for the app, which sets up the navigation stack 
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

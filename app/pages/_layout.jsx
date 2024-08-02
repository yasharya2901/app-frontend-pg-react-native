import { Stack } from "expo-router";
import { ScreenDimensionsProvider } from "../../context/ScreenDimensionsContext";

export default function Layout() {
  return (
    <ScreenDimensionsProvider>
      <Stack>
        <Stack.Screen name="create-users" options={{ headerShown: false }} />
        <Stack.Screen
          name="create-notifications"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="edit-food-menu" options={{ headerShown: false }} />
        <Stack.Screen name="food-reviews" options={{ headerShown: false }} />
        <Stack.Screen name="meal-preference" options={{ headerShown: false }} />
        <Stack.Screen name="notifications" options={{ headerShown: false }} />
      </Stack>
    </ScreenDimensionsProvider>
  );
}

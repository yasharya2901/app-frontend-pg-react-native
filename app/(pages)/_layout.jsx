import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="create-users" options={{title: "Create Users", headerShown: true, headerShadowVisible: false, headerTitleAlign: "center" ,headerTitleStyle: {fontWeight: "bold", fontFamily: "Poppins-Bold"}}} />
            <Stack.Screen name="camera-scan" options={{title: "Scan for Food", headerShown: true, headerShadowVisible: false, headerTitleAlign: "center", headerTitleStyle: {fontWeight: "bold", fontFamily: "Poppins-Bold"}, headerStyle: {backgroundColor: "transparent"}}} />
            <Stack.Screen name="enjoy-meal" options={{title: "Enjoy Your Meal", headerShown: true, headerShadowVisible: false, headerTitleAlign: "center", headerTitleStyle: {fontWeight: "bold", fontFamily: "Poppins-Bold"}, headerStyle: {backgroundColor: "transparent"}}} />
        </Stack>
    )
}

export default Layout;
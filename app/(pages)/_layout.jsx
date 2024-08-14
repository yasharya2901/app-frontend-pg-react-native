import { Stack } from "expo-router";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="create-users" options={{title: "Create Users", headerShown: true, headerShadowVisible: false, headerTitleAlign: "center" ,headerTitleStyle: {fontWeight: "bold", fontFamily: "Poppins-Bold"}}} />
        </Stack>
    )
}

export default Layout;
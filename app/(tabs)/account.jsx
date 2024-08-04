import { Image, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const account = () => {
  return (
    <SafeAreaView className="p-4 h-full bg-white">
      <View className="flex flex-row items-center justify-center h-16">
        <Text className="font-psemibold text-lg ">Account</Text>
      </View>

      <View className="flex flex-col justify-center items-center mt-4">
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={{ width: 140, height: 140, borderRadius: 75 }}
        />
        <View className="m-2 flex items-center justify-center">
          <Text className="font-pbold text-xl">Aditya</Text>
          <Text className="text-[#4F7396]">Room 345</Text>
          <Text className="text-[#4F7396]">Meal Status: Opted-in</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default account;

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ManageButton from "../../components/ManageButton";

const manage = () => {
  return (
    <SafeAreaView className="p-4 h-full bg-white">
      <Text className="text-lg text-center font-pbold mt-2">Manage</Text>
      <Text className="font-pbold text-2xl mb-6">Actions</Text>

      <ManageButton
        buttonStyle={`bg-primary rounded-2xl text-base`}
        handlePress={() => {
          console.log("Button Pressed");
        }}
        textStyle={``}
        text={`Create users`}
      />
    </SafeAreaView>
  );
};

export default manage;

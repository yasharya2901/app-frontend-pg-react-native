import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ManageButton from "../../components/ManageButton";
import { router, useRouter } from "expo-router";

const manage = ({ navigation }) => {
  return (
    <SafeAreaView className="p-4 h-full bg-white">
      <Text className="text-lg text-center font-pbold mt-2 mb-2">Manage</Text>     
      <Text className="font-pbold text-2xl mb-6">Actions</Text>

      <ManageButton
        // buttonStyle={`bg-primary`}
        handlePress={() => {
          router.push("/pages/create-users");
        }}
        textStyle={``}
        text={`Create users`}
      />
      <ManageButton
        // buttonStyle={`bg-primary`}
        handlePress={() => {
          router.push("/pages/create-notifications");
        }}
        textStyle={``}
        text={`Create Notifications`}
      />
      <ManageButton
        // buttonStyle={`bg-primary`}
        handlePress={() => {
          router.push("/pages/edit-food-menu");
        }}
        textStyle={``}
        text={`Edit Food Menu`}
      />
      <ManageButton
        // buttonStyle={`bg-primary`}
        handlePress={() => {
          router.push("/pages/food-reviews");
        }}
        textStyle={``}
        text={`See User's Food Reviews`}
      />
    </SafeAreaView>
  );
};

export default manage;

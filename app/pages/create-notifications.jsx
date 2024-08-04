import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-paper";

const createNotifications = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleNotify = () => {
    const userData = {
      title,
      description,
    };
    console.log("User Data:", JSON.stringify(userData));
  };

  return (
    <SafeAreaView className="p-4 h-full bg-white">
      <View>
        <TextInput
          label="Title"
          value={title}
          onChangeText={setTitle}
          mode="outlined"
          className="bg-white mb-4"
        />
        <TextInput
          label="Description"
          value={description}
          onChangeText={setDescription}
          mode="outlined"
          multiline
          numberOfLines={6}
          className="bg-white mb-4"
        />
        <TouchableOpacity
          className="bg-slate-400 mt-8 h-12 rounded-xl flex justify-center items-center"
          onPress={handleNotify}
        >
          <Text className="font-psemibold">Notify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default createNotifications;

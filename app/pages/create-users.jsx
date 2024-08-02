import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Switch, TextInput, ToggleButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const createUsers = () => {
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [roomnumber, setRoomnumber] = useState("");
  const [usertype, setUsertype] = useState("");
  const [foodstatus, setFoodStatus] = useState(false); // State for toggle button
  const [address, setAddress] = useState("");

  const handleSave = () => {
    const userData = {
      username,
      phonenumber,
      roomnumber,
      address,
      usertype,
      foodstatus,
    };
    console.log("User Data:", JSON.stringify(userData));
  };

  return (
    <SafeAreaView className="p-4 h-full bg-white">
      
      <View>
        <TextInput
          label="Username"
          value={username}
          onChangeText={setUsername}
          mode="outlined"
          className="bg-white mb-4"
        />
        <TextInput
          label="Phone Number"
          value={phonenumber}
          onChangeText={setPhonenumber}
          mode="outlined"
          className="bg-white mb-6"
        />
        <TextInput
          label="Room Number"
          value={roomnumber}
          onChangeText={setRoomnumber}
          mode="outlined"
          className="bg-white mb-6"
        />
        <TextInput
          label="Address"
          value={address}
          onChangeText={setAddress}
          mode="outlined"
          multiline
          numberOfLines={6}
          className="bg-white mb-6"
        />
        <TextInput
          label="User Type"
          value={usertype}
          onChangeText={setUsertype}
          mode="outlined"
          className="bg-white mb-6"
        />
      </View>
      <View className="mt-4 pl-2 pr-2 flex flex-row justify-between items-center">
        <Text className="font-pmedium text-xl">Food Status</Text>
        <Switch value={foodstatus} onValueChange={setFoodStatus} />
      </View>
      <TouchableOpacity
        className="bg-slate-400 mt-8 h-12 rounded-xl flex justify-center items-center"
        onPress={handleSave}
      >
        <Text className="font-psemibold">Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default createUsers;

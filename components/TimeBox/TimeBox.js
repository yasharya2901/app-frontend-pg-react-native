import { View, Text } from "react-native";
import React from "react";

const TimeBox = ({unit, value}) => {
  return (
    <View className="flex m-2 items-center ">
      <View className="bg-secondary text-center h-14 rounded-xl justify-center w-[104px] items-center">
        <Text className="font-pmedium">{value}</Text>
      </View>
      <Text>{unit}</Text>
    </View>
  );
};

export default TimeBox;

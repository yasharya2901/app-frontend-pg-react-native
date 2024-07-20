import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import RightArrow from "../../assets/icons/svg/rightArrow.svg";

const ManageButton = ({
  buttonStyle,
  handlePress,
  textStyle,
  text = "Button",
}) => {
  return (
    <TouchableOpacity
      className={`${buttonStyle} p-2 flex`}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text className={`text-center ${textStyle}`}>{text}</Text>
      <RightArrow width={24} height={24} />
    </TouchableOpacity>
  );
};

export default ManageButton;

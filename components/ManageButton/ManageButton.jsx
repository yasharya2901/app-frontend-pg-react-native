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
      className={`${buttonStyle} p-2 mt-2 mb-2 flex flex-row justify-between items-center`}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text className={`${textStyle} text-lg font-pmedium`}>{text}</Text>
      <RightArrow width={24} height={24} />
    </TouchableOpacity>
  );
};

export default ManageButton;

import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({buttonStyle, handlePress, textStyle, text="Button", disabled = false}) => {
  return (
    <TouchableOpacity className={`${buttonStyle} p-2`} onPress={handlePress} activeOpacity={0.7} disabled={disabled}>
        <Text className={`text-center ${textStyle}`}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
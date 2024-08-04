import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({buttonStyle, handlePress, textStyle, text="Button"}) => {
  return (
    <TouchableOpacity className={`${buttonStyle} p-2`} onPress={handlePress} activeOpacity={0.7}>
        <Text className={`text-center ${textStyle}`}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
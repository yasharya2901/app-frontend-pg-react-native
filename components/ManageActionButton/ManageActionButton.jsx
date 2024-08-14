import { View, Text, TouchableOpacity } from 'react-native'
import RightArrow from '../../assets/icons/svg/rightArrow.svg'
import React from 'react'

const ManageActionButton = ({buttonStyle, handlePress, textStyle, text = "Button"}) => {
  return (
    <TouchableOpacity
      className={`${buttonStyle} mt-2 mb-6 flex flex-row justify-between items-center`}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text className={`${textStyle} text-lg font-pmedium`}>{text}</Text>
      <RightArrow width={18} height={18} />
    </TouchableOpacity>
  )
}

export default ManageActionButton
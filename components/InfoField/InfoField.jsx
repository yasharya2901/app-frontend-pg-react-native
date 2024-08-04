import { View, Text, TextInput } from 'react-native'
import React from 'react'

const InfoField = ({fieldName, fieldValue, isEditable}) => {
  return (
    <View className={`mb-4`}>
        <Text className="text-base font-pmedium">
          {fieldName}
        </Text>
        <View className="border-[1px] h-14 w-full border-gray-400 rounded-xl flex mt-2 mb-2 flex-row items-center">
          <TextInput className={`font-pmedium items-center justify-center w-full h-full p-2 flex-1 ${(isEditable) ? "" : "text-black opacity-50"}`}
            value={fieldValue}
            editable={isEditable}
          />
        </View>
    </View>
  )
}

export default InfoField
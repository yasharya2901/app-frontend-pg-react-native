import { View, Text, TouchableOpacity, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import React, {useState} from 'react'
import { icons } from '../../constants'

const InfoField = ({fieldName, fieldValue, isEditable, onChange, type}) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`mb-4`}>
        <Text className="text-base font-pmedium">
          {fieldName}
        </Text>
        <View className="border-[1px] h-14 w-full border-gray-400 rounded-xl flex mt-2 mb-2 flex-row items-center">
          <TextInput className={`font-pmedium items-center justify-center w-full h-full p-2 flex-1 ${(isEditable) ? "" : "text-black opacity-50"}`}
            value={fieldValue}
            editable={isEditable}
            onChangeText={onChange}
            secureTextEntry={type === "password" && !showPassword}
          />
          {type === "password" && (
            <TouchableOpacity activeOpacity={0.7} onPress={()=>setShowPassword(!showPassword)} className="p-2">
                <Image  className="w-6 h-6 mr-2" source={!showPassword ? icons.eye : icons.eyeHide} resizeMode='contain'/>
            </TouchableOpacity>
          )}
        </View>
    </View>
  )
}

export default InfoField
import { View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../../constants'

const LoginField = ({value, placeholder, handleChangeText, secureTextEntry=false, keyboardType="default"}) => {
    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`border-[1px] h-14 w-full border-gray-400 rounded-xl flex mt-2 mb-2 flex-row items-center`}>
        <TextInput 
            className="font-pmedium items-center justify-center w-full h-full p-2 flex-1" 
            placeholder={placeholder}
            value={value}
            onChangeText={handleChangeText}
            secureTextEntry={placeholder === 'Password' && !showPassword}
            keyboardType={keyboardType}
        />
        {placeholder === "Password" && (
            <TouchableOpacity activeOpacity={0.7} onPress={()=>setShowPassword(!showPassword)} className="p-2">
                <Image  className="w-6 h-6 mr-2" source={!showPassword ? icons.eye : icons.eyeHide} resizeMode='contain'/>
            </TouchableOpacity>
        )}
    </View>
  )
}

export default LoginField
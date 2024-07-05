import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'

const SignIn = () => {
  return (
    <SafeAreaView className="flex flex-col">
        <View>
        <Text>SignIn</Text>

        </View>
        <View className="flex flex-row">
            <View className="flex-1">
                <CustomButton buttonStyle="bg-primary rounded-md" textStyle={`font-pmedium`} text='Reset Password' handlePress={()=>console.log("Reset Password")}/>
            </View>
            <View className="flex-1">
                <CustomButton buttonStyle="bg-primary rounded-md" textStyle={`font-pmedium`} text='Sign In' handlePress={()=>console.log("Sign In")}/>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default SignIn
import { View, Text, TouchableOpacity, Animated, Alert } from 'react-native'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/CustomButton'
import LoginField from '../../components/LoginField'
import {Link, router} from 'expo-router';


const SignIn = () => {
  const [usePassword, setUsePassword] = useState(true);
  const [form, setForm] = useState({
    mobile: '',
    password: '',
    otp:'',
    usePassword: usePassword
  })

  const submit = async () => {
    try {
      router.replace('/home')
    } catch (error) {
      Alert.alert('Error', error.message)
    }
  }

  const opacity = useRef(new Animated.Value(1)).current;

  const toggleUsePassword = () => {
      setUsePassword(!usePassword);
      setForm({...form, usePassword: !usePassword})
  };

  return (
    <SafeAreaView className="flex flex-col p-4 h-full justify-between bg-white">
      <View className="">
        <View className="h-40 flex justify-end items-center">
          <Text className={`font-pbold text-2xl w-max`}>Sign In</Text>

        </View>
        <View className="flex justify-around h-80 mt-12">
          <View>
            <Text className={`font-pbold text-left text-2xl`}>Welcome Back!</Text>
            <Text className={`font-pmedium text-base text-left`}>Log in to your account to enjoy the seamless service of Uniworld.</Text>
          </View>
          <View>
            <LoginField
              placeholder="Mobile number"
              value={form.mobile}
              handleChangeText={(e) => setForm({...form, mobile: e})}
              keyboardType='phone-pad'
            />

            {(usePassword) ? 
                  <LoginField
                    placeholder="Password"
                    value={form.password}
                    handleChangeText={(e) => setForm({...form, password: e})}
                    secureTextEntry={true}
                  /> :
                  <LoginField
                    placeholder="OTP"
                    value={form.opt}
                    handleChangeText={(e) => setForm({...form, otp: e})}
                    keyboardType='number-pad'
                  />
            }
            <TouchableOpacity activeOpacity={0.8} onPress={toggleUsePassword}>
              <Text className={`font-pmedium text-sm text-right`}>{(usePassword) ? "Login Using OTP" : "Login Using Password"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className={`h-14`}>
        <View className="flex flex-row">
            <View className="flex-1">
                <CustomButton buttonStyle="bg-secondary rounded-md mr-2" textStyle={`font-pbold text-base`} text='Reset Password' handlePress={()=>{}}/>
            </View>
            <View className="flex-1">
                <CustomButton buttonStyle="bg-primary rounded-md ml-2" textStyle={`font-pbold text-base`} text='Sign In' handlePress={submit}/>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn
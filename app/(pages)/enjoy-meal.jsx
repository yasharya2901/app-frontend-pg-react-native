import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'

const EnjoyMeal = () => {
  return (
    <SafeAreaView>
      <Text className={`text-center text-2xl font-pbold`}>
        Enjoy Your Lunch
      </Text>
      <View className={`bg-[#f2a261] h-28 rounded-xl flex justify-center items-center box-border m-10`}>
        <Text className={`font-psemibold`}>
            Meal Scanned
        </Text>
        <Text>
            24/08/2024
        </Text>
        <Text>
            Lunch
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default EnjoyMeal
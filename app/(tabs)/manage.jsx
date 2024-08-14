import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ManageActionButton from '../../components/ManageActionButton'
import { router } from 'expo-router'

const manage = () => {
  return (
    <SafeAreaView className={`flex-1 pl-4 pr-4`}>
      <Text className="text-lg text-center font-pbold mt-2">Manage</Text>
      <Text className="font-pbold text-2xl mt-6 mb-8">Actions</Text>

      <View>
        <ManageActionButton text="Create Users" handlePress={() => router.push("/(pages)/create-users")}/>
        <ManageActionButton text="View All Users"/>
        <ManageActionButton text="Edit Food Menu"/>
      </View>
    </SafeAreaView>
  )
}

export default manage
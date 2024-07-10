import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'
import TimeBox from '../TimeBox'
import BreakFast from "../../assets/images/Breakfast.png"

const MealCard = () => {
  return (
    <View className="ml-3 mr-2">
        <View>
            <Image source={BreakFast} className="w-full h-52 rounded-xl" />
        </View>
        <View>
            <Text className="font-psemibold text-lg pt-4 pb-4">Breakfast</Text>
            <View className="flex flex-row justify-between items-center pb-12">
                <Text className="font-pregular">7:30 am - 9:30 pm</Text>
                <CustomButton 
                    buttonStyle={`bg-primary rounded-2xl text-base w-32`} 
                    handlePress={()=>{console.log('Button Pressed')}}
                    textStyle={``}
                    text={`Scan Me`} 
                />
            </View>
        </View>
        <View className="flex flex-row justify-between ">
            <TimeBox value={`00`} unit={`hours`}/>
            <TimeBox value={`00`} unit={`minutes`}/>
            <TimeBox value={`00`} unit={`Seconds`}/>
        </View>
    </View>
  )
}

export default MealCard
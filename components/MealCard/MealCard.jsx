import { View, Text, Image } from 'react-native'
import React, { useContext } from 'react'
import CustomButton from '../CustomButton'
import TimeBox from '../TimeBox'
import { images } from '../../constants'
// import { ScreenDimensionsContext } from '../../context/ScreenDimensionsContext'

const MealCard = ({mealType, startTime, endTime}) => {

    // const {width, height} = useContext(ScreenDimensionsContext);

    let mealImage = null;
    if(mealType === "Breakfast"){
        mealImage = images.BreakFast;
    } else if (mealType === "Lunch"){
        mealImage = images.Lunch;
    } else if (mealType === "Dinner"){
        mealImage = images.Dinner;
    }

    // const imageWidth = width * (1 - 0.4);
  return (
    <View>
        <View>
            <Image source={mealImage} className="w-full h-52 rounded-xl" />
        </View>
        <View>
            <Text className="font-psemibold text-lg pt-4 pb-4">{mealType}</Text>
            <View className="flex flex-row justify-between items-center pb-12">
                <Text className="font-pregular">{`${startTime} - ${endTime}`}</Text>
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
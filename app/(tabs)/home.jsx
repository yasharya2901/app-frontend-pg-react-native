import { Dimensions, FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MealCard from "../../components/MealCard/MealCard";
import { svgs } from "../../constants";
import RightArrow from "../../assets/icons/svg/rightArrow.svg";
import { getTodayMenu } from "../../api/menu/menu";
import Carousel from "react-native-reanimated-carousel";
import CustomButton from "../../components/CustomButton";

const Home = () => {
  const name = "Aditya";
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [defaultIndex, setDefaultIndex] = useState(0); // default index of meal card carousel
  
  
  const [weekMenu, setWeekMenu] = useState([]);
  const [error, setError] = useState(null);

  const getDefaultIndex = (weekMenu) => {
    
    const meals = weekMenu?.meals;
    const currentTime = new Date().getTime();
    // convert current time to 24 hour format
    const currentHour = new Date(currentTime).getHours();
    const currentMinute = new Date(currentTime).getMinutes();
    
    let defaultIndex = 0;

    if (!meals) {
      return defaultIndex;
    }

    for (let i = 0; i < meals.length; i++) {
      const meal = meals[i];
      const mealStartTime = meal.startTime;
      const mealEndTime = meal.endTime;
      const mealStartHour = Number(mealStartTime.split(" ")[1].split(":")[0]);
      const mealStartMinute = Number(mealStartTime.split(" ")[1].split(":")[1]);
      const mealEndHour = Number(mealEndTime.split(" ")[1].split(":")[0]);
      const mealEndMinute = Number(mealEndTime.split(" ")[1].split(":")[1]);
      if (currentHour < mealStartHour && currentHour < mealEndHour) {
        defaultIndex = i;
        break;
      } else if(currentHour >= mealStartHour && currentHour <= mealEndHour) {
        defaultIndex = i;
        break;
      } else if (currentHour === mealStartHour) {
        if (currentMinute <= mealStartMinute && currentMinute >= mealEndMinute) {
          defaultIndex = i;
          break;
        }
      }
    }
    return defaultIndex;
  }
  const renderItem = (mealType, startTime, endTime) => {
    return (
    <View className="mb-[120px]">
      <MealCard mealType={mealType} startTime={startTime} endTime={endTime} />
    </View>
  )};

  const convertTimeStampToTime = (timeStamp) => {
    timeStamp = timeStamp.split(" ")[1].slice(0, 5);
    timeStamp = timeStamp.split(":");
    let amOrPm = "";
    if (Number(timeStamp[0]) > 12) {
      timeStamp[0] -= 12;
      amOrPm = "PM";
    } else if (Number(timeStamp[0]) === 12) {
      amOrPm = "PM";
    } else {
      amOrPm = "AM";
    }
    timeStamp = `${timeStamp[0]}:${timeStamp[1]} ${amOrPm}`;
    return timeStamp;
  }
  const ItemSeparator = () => <View />;

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await getTodayMenu();
        setWeekMenu(response.menuToday[0]);
        setDefaultIndex(getDefaultIndex(response.menuToday[0]));
        setError(null);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };
    fetchMenu();
  }, []);

  const handleRetry = async () => {
    try {
      const response = await getTodayMenu();
      setWeekMenu(response.menuToday[0]);
      setDefaultIndex(getDefaultIndex(response.menuToday[0]));
      setError(null);
    } catch (error) {
      setError(error);
      console.error(error);
    }
  }

  return (
    <SafeAreaView className="flex flex-col p-4 h-full justify-between bg-white">
      <View className="h-10 flex items-end justify-center ">
        <svgs.notification_svg className='h-8 w-8'/>
      </View>
      <View className="mb-10">
        <Text className="font-bold text-2xl ">{`Good Evening, ${name}!`}</Text>
      </View>
      {/* <FlatList
        data={weekMenu?.meals}
        renderItem={({item}) => {
          return renderItem(item.name, item.startTime, item.endTime);
        }}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ItemSeparatorComponent={ItemSeparator}
      /> */}
      {(weekMenu?.meals) ? (<Carousel
        width={width - 32}
        autoPlay={false}
        data={weekMenu?.meals}
        defaultIndex={defaultIndex}
        renderItem={({item}) => (renderItem(item.name, item.startTime, item.endTime))}
      />): (error) ? (<View className={`h-full flex items-center justify-center`}>
        <Text className={`font-pbold text-lg rounded-lg shadow-2xl`}>Oops! Something Went Wrong...</Text>
        <CustomButton text="Retry" handlePress={handleRetry} textStyle={``}/>
      </View>) : (<Text className="font-pregular text-center mb-[500px]">No meals for today</Text>)}
      <View>
        <View className="flex items-end">
          <TouchableOpacity className="h-14 w-[338px] bg-primary flex items-center justify-center rounded-xl pl-[5px] pr-[5px]" activeOpacity={0.7}>

            <View className="flex flex-row items-center">
              <Text className="p-2 flex text-right font-pregular text-base">
                Tomorrow's{" "}
                <Text className="font-pmedium">Meal Preference</Text>
              </Text>
              <RightArrow width={24} height={24} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MealCard from "../../components/MealCard/MealCard";
import { svgs } from "../../constants";
import RightArrow from "../../assets/icons/svg/rightArrow.svg";
import { getTodayMenu } from "../../api/menu/menu";
import { router } from "expo-router";

const Home = () => {
  const name = "Aditya";

  const [weekMenu, setWeekMenu] = useState([]);
  const renderItem = (mealType, startTime, endTime) => {
    return (
      <View className="mb-[120px]">
        <MealCard mealType={mealType} startTime={startTime} endTime={endTime} />
      </View>
    );
  };

  const ItemSeparator = () => <View />;

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await getTodayMenu();
        setWeekMenu(response.menuToday[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMenu();
  }, []);

  return (
    <SafeAreaView className="flex flex-col p-4 h-full justify-between bg-white">
      <View className="h-10 flex items-end justify-center ">
        <svgs.notification_svg
          className="h-8 w-8"
          onPress={() => router.push("/pages/notifications")}
        />
      </View>
      <View className="mb-10">
        <Text className="font-bold text-2xl ">{`Good Evening, ${name}!`}</Text>
      </View>
      <FlatList
        data={weekMenu?.meals}
        renderItem={({ item }) => {
          return renderItem(item.name, item.startTime, item.endTime);
        }}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        ItemSeparatorComponent={ItemSeparator}
      />
      <View>
        <View className="flex items-end">
          <TouchableOpacity
            className="h-14 w-[338px] bg-primary flex items-center justify-center rounded-xl pl-[5px] pr-[5px]"
            activeOpacity={0.7}
            onPress={() => router.push("/pages/meal-preference")}
          >
            <View className="flex flex-row items-center">
              <Text className="p-2 flex text-right font-pregular text-base">
                Tomorrow's <Text className="font-pmedium">Meal Preference</Text>
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

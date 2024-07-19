import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { icons } from '../../constants';

const DayMenu = ({ week, onToggle }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
    onToggle();  // Notifying the parent component about the expansion change
  };

  return (
    <TouchableOpacity
      onPress={toggleExpand}
      className="bg-white p-5 rounded-lg shadow-2xl mt-1 mb-2"
      activeOpacity={0.8}
    >
      <Text className={`font-pbold text-lg rounded-lg shadow-2xl ${expanded ? "mb-4" : ""}`}>
        {week.day}
      </Text>
      {expanded && week.meals.map((meal, index) => (
        <View key={meal.id} className="mt-2">
          <Text className="font-pbold text-base mt-3">{meal.name}</Text>
          {meal.mealItems.map((mealItem, itemIndex) => (<>
            <View className="flex flex-row items-center mb-2">
              <View className="bg-secondary rounded-md h-9 w-9 flex items-center justify-center">
                <Image key={`${mealItem.type}`} source={icons[mealItem.type === "non-veg" ? "non_veg" : mealItem.type]} className="m-1 w-6 h-6" resizeMode='contain' />
              </View>
              <Text key={`${mealItem._id}`} className="font-pmedium text-base ml-4">
                {mealItem.name}
              </Text>
            </View>
          </>
          ))}
        </View>
      ))}
    </TouchableOpacity>
  );
};

export default DayMenu;

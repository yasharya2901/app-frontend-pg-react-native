import React, { useRef } from 'react';
import { ScrollView, Text, View } from 'react-native';
import DayMenu from '../../components/DayMenu';  // Adjust the import path as needed
import weekMenu from '../../api/mockApi';  // Adjust the import path as needed
import { SafeAreaView } from 'react-native-safe-area-context';

const Menu = () => {
  const scrollViewRef = useRef();

  // This function is called when any DayMenu toggles its expanded state
  const handleToggle = () => {
    
  };

  return (
    <SafeAreaView className="flex-1 pl-4 pr-4">
      <Text className="text-lg text-center font-pbold mt-2">Meal Plan</Text>
      <Text className="font-pbold text-2xl mt-6 mb-6">
        Weekly Menu
      </Text>
      <ScrollView
        ref={scrollViewRef}
        className="flex"
        >
        {weekMenu.map((week, index) => (
          <DayMenu key={index} week={week} onToggle={handleToggle} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;

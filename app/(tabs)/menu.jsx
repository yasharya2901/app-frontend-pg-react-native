import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import DayMenu from '../../components/DayMenu';
import CustomButton from '../../components/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context';
import {getThisWeeksMenu} from '../../api/menu/menu';

const Menu = () => {
  const scrollViewRef = useRef();

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      const response = await getThisWeeksMenu();
      setData(response.weeklyMenu);
      setError(null);
      
    } catch (error) {
      setError(error);
    }
  }
  
  useEffect(() => {
    loadData();
  }, []);



  // This function is called when any DayMenu toggles its expanded state
  const handleToggle = () => {
    
  };

  return (
    <SafeAreaView className={`flex-1 pl-4 pr-4`}>
      <Text className="text-lg text-center font-pbold mt-2">Meal Plan</Text>
      <Text className="font-pbold text-2xl mt-6 mb-6">
        Weekly Menu
      </Text>
      {(!error) ?
        (<ScrollView
          ref={scrollViewRef}
          className={`flex`}
          >
          {data ? data.map((week, index) => (
            <DayMenu key={index} week={week} onToggle={handleToggle} />
          )) : <Text className={`font-pbold text-lg rounded-lg shadow-2xl`}>Nothing seems to be for this week</Text>}
        </ScrollView>) : 
        (<View className={`h-full flex items-center justify-center`}>
          <Text className={`font-pbold text-lg rounded-lg shadow-2xl`}>Oops! Something Went Wrong...</Text>
          <CustomButton text="Retry" handlePress={loadData} textStyle={``}/>
        </View>)

      }
    </SafeAreaView>
  );
};

export default Menu;

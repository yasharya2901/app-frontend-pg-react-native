import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  let isAdmin = true;

  const tabScreens = [
    {
      name: 'home',
      title: 'Home',
      icon: icons.home,
      label: 'Home'
    },
    {
      name: 'menu',
      title: 'Menu',
      icon: icons.menu,
      label: 'Menu'
    },
    {
      name: 'account',
      title: 'Account',
      icon: icons.account,
      label: 'Account'
    }
  ];

  if (isAdmin) {
    tabScreens.splice(2, 0, {
      name: 'manage',
      title: 'Manage',
      icon: icons.manage,
      label: 'Manage'
    });
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#70706e',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopWidth: 1,
          height: 84,
          borderTopColor: '#F4F2F0'
        }
      }}
    >
      {tabScreens.map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{
            title: screen.title,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={screen.icon}
                color={color}
                name={screen.label}
                focused={focused}
              />
            )
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;

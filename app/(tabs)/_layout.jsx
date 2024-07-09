import { View, Text, Image} from 'react-native'
import React from 'react'
import { Tabs, Redirect} from 'expo-router'
import {icons} from '../../constants'

const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View className="items-center justify-center gap-2 ">
        <Image 
            source={icon}
            resizeMode="contain"
            tintColor={color}
            className="w-6 h-6"
        />
        <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs` }
            style={{color: color}}
        >
            {name}
        </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
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
        <Tabs.Screen 
            name="home"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ color,focused }) => (
                    <TabIcon 
                        icon={icons.home}
                        color={color}
                        name="Home"
                        focused={focused}
                    />
                )
            }}
        />
          <Tabs.Screen 
            name="manage"
            options={{
                title: 'Manage',
                headerShown: false,
                tabBarIcon: ({ color,focused }) => (
                    <TabIcon 
                        icon={icons.manage}
                        color={color}
                        name="Manage"
                        focused={focused}
                    />
                )
            }}
        />
          <Tabs.Screen 
            name="menu"
            options={{
                title: 'Menu',
                headerShown: false,
                tabBarIcon: ({ color,focused }) => (
                    <TabIcon 
                        icon={icons.menu}
                        color={color}
                        name="Menu"
                        focused={focused}
                    />
                )
            }}
        />
          <Tabs.Screen 
            name="account"
            options={{
                title: 'Account',
                headerShown: false,
                tabBarIcon: ({ color,focused }) => (
                    <TabIcon 
                        icon={icons.account}
                        color={color}
                        name="Account"
                        focused={focused}
                    />
                )
            }}
        />

        </Tabs>
    </>
  )
}
{/* <Stack.Screen name="(tabs)" options={{headerShown: false}} /> */}


export default TabsLayout
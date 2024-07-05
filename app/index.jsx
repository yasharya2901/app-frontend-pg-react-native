import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignIn from './(auth)/sign-in';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <SafeAreaView className="flex justify-center items-center h-full">
        <Text className="font-pmedium">Welcome to The Uniworld!</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }

  return <SignIn/>
}


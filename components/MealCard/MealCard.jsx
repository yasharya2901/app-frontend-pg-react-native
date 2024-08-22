import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomButton from '../CustomButton';
import TimeBox from '../TimeBox';
import { images } from '../../constants';
import { router } from 'expo-router';

const MealCard = ({ mealId, mealType, startTime, endTime }) => {
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [timerIntervalId, setTimerIntervalId] = useState(null);

    // Determine meal image based on mealType
    let mealImage = null;
    if (mealType === "Breakfast") {
        mealImage = images.BreakFast;
    } else if (mealType === "Lunch") {
        mealImage = images.Lunch;
    } else if (mealType === "Dinner") {
        mealImage = images.Dinner;
    }

    // Convert timestamp to AM/PM format
    const convertTimeStampToTime = (timeStamp) => {
        const [date, time] = timeStamp.split(" ");
        const [hour, minute] = time.split(":");
        let amOrPm = Number(hour) >= 12 ? "PM" : "AM";
        const adjustedHour = Number(hour) % 12 || 12;
        return `${adjustedHour}:${minute} ${amOrPm}`;
    };

    // Start the countdown timer
    const startTimer = () => {
        const intervalId = setInterval(() => {
            const currentTime = new Date();
            const [startDate] = parseTime(startTime);

            // Calculate the remaining time until the meal start time
            const remainingTimeInSeconds = Math.floor((startDate - currentTime) / 1000);

            if (remainingTimeInSeconds > 0) {
                // If time remains until start, update state
                const remainingHour = Math.floor(remainingTimeInSeconds / 3600);
                const remainingMinute = Math.floor((remainingTimeInSeconds % 3600) / 60);
                const remainingSecond = remainingTimeInSeconds % 60;

                setHour(remainingHour);
                setMinute(remainingMinute);
                setSecond(remainingSecond);
            } else {
                // Stop timer when startTime is reached
                stopTimer(intervalId);
                setHour(0);
                setMinute(0);
                setSecond(0);
            }
        }, 1000);

        setTimerIntervalId(intervalId);
    };

    // Stop the timer
    const stopTimer = (intervalId) => {
        clearInterval(intervalId);
        setTimerIntervalId(null);
    };

    // Parse the time string into a Date object with DD-MM-YYYY format
    const parseTime = (timeString) => {
        const [datePart, timePart] = timeString.split(" ");
        const [day, month, year] = datePart.split("-").map(Number);
        const [hour, minute, second] = timePart.split(":").map(Number);

        return [new Date(year, month - 1, day, hour, minute, second), hour, minute, second];
    };

    useEffect(() => {
        startTimer();
        return () => {
            if (timerIntervalId) stopTimer(timerIntervalId);
        };
    }, [startTime, endTime]);

    const isTimeForMeal = () => {
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();
        const [startHour, startMinute, startSecond] = parseTime(startTime);
        const [endHour, endMinute, endSecond] = parseTime(endTime);
        return (currentHour >= startHour && currentHour <= endHour) && (currentMinute >= startMinute && currentMinute <= endMinute) && (currentSecond >= startSecond && currentSecond <= endSecond);
        

    }

    const scanMeal = (mealId, mealType) => {
        router.push("/(pages)/camera-scan")
        return
    }
    
    return (
        <View>
            <View>
                <Image source={mealImage} className="w-full h-52 rounded-xl" />
            </View>
            <View>
                <Text className="font-psemibold text-lg pt-4 pb-4">{mealType}</Text>
                <View className="flex flex-row justify-between items-center pb-12">
                    <Text className="font-pregular">{`${convertTimeStampToTime(startTime)} - ${convertTimeStampToTime(endTime)}`}</Text>
                    <CustomButton
                        buttonStyle={`${(isTimeForMeal()) ? "bg-primary" : "bg-disabled"} rounded-2xl text-base w-32`}
                        handlePress={() => { 
                            return scanMeal(mealId, mealType)
                         }}
                        textStyle={``}
                        text={`Scan Me`}
                        disabled={false}
                    />
                </View>
            </View>
            <View className="flex flex-row justify-between ">
                <TimeBox value={hour} unit={`hours`} />
                <TimeBox value={minute} unit={`minutes`} />
                <TimeBox value={second} unit={`seconds`} />
            </View>
        </View>
    );
};

export default MealCard;

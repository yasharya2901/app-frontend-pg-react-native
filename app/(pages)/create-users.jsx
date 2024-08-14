import { View, TextInput, TouchableOpacity, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoField from "../../components/InfoField";
import { useSelector, useDispatch } from "react-redux";
import CustomDropDownPicker from "../../components/CustomDropDownPicker";

const createUsers = () => {

    const dispatch = useDispatch();

    const preferencesItems = useSelector(state => state.dropdowns.preferencesItems)
    const userType = useSelector(state => state.dropdowns.userType)
    const foodStatus = useSelector(state => state.dropdowns.foodStatus)


    const [userData, setUserData] = useState({
        username: "",
        phonenumber: "",
        roomnumber: "",
        address: {
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            pincode: "",
            country: "India"
        },
        foodPreference: "",
        usertype: "",
        foodstatus: "",
        password: "",
    });

    const handleSave = (userData) => {
        // Save user data to database
        // reset the form
        setUserData({
            username: "",
            phonenumber: "",
            roomnumber: "",
            address: {
                addressLine1: "",
                addressLine2: "",
                city: "",
                state: "",
                pincode: "",
                country: "India"
            },
            foodPreference: "",
            usertype: "",
            foodstatus: "",
            password: "",
        });
        console.log("User Data:", JSON.stringify(userData));
    };

    const data = [
        { id: 1, fieldName: "Name", fieldValue: userData.username, isEditable: true, type: "text" },
        { id: 2, fieldName: "Phone Number", fieldValue: userData.phonenumber, isEditable: true, type: "text" },
        { id: 3, fieldName: "Room Number", fieldValue: userData.roomnumber, isEditable: true, type: "text" },
        { id: 4, fieldName: "Food Preference", fieldValue: userData.foodPreference, isEditable: true, type: "dropdown", options: preferencesItems, dropDownActive: false, defaultValue: "veg" },
        { id: 5, fieldName: "User Type", fieldValue: userData.usertype, isEditable: true, type: "dropdown", options: userType, dropDownActive: false, defaultValue: "user" },
        { id: 6, fieldName: "Food Status", fieldValue: userData.foodstatus, isEditable: true, type: "dropdown", options: foodStatus, dropDownActive: false, defaultValue: "opt-in" },
        { id: 7, fieldName: "Password", fieldValue: userData.password, isEditable: true, type: "password" },
    ]

    const renderItems = ({ item }) => {
        switch (item.type) {
            case "text":
                return (
                    <InfoField fieldName={item.fieldName} fieldValue={item.fieldValue} isEditable={item.isEditable} />
                );
            case "dropdown":
                return (
                    <CustomDropDownPicker pickerTitle={item.fieldName} dropDownOpenState={item.dropDownActive} options={item.options} value={item.defaultValue} />
                )
            default:
                return (
                    <InfoField fieldName={item.fieldName} fieldValue={item.fieldValue} isEditable={item.isEditable} />
                );
        }
    }

    return (
        <SafeAreaView className="p-4 h-full bg-white">
            <FlatList 
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    renderItems({ item })
                )}
            />
        </SafeAreaView>
    );
};

export default createUsers;
import { View, TextInput, TouchableOpacity, Text, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoField from "../../components/InfoField";
import { useSelector, useDispatch } from "react-redux";
import CustomDropDownPicker from "../../components/CustomDropDownPicker";
import { setPreferencesItems, setUserType, setFoodStatus } from "../../redux/store";
import CustomButton from "../../components/CustomButton";
import { createUser } from "../../api/user/user";
import { KeyboardAwareFlatList, KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CreateUsers = () => {
    const dispatch = useDispatch();

    const preferencesItems = useSelector(state => state.dropdowns.preferencesItems);
    const userType = useSelector(state => state.dropdowns.userType);
    const foodStatus = useSelector(state => state.dropdowns.foodStatus);

    const [userData, setUserData] = useState({
        name: "",
        phoneNumber: "",
        roomNumber: "",
        address: {
            addressLine1: "Electronic City",
            addressLine2: "",
            city: "Bengaluru",
            state: "Karnataka",
            pincode: "560100",
            country: "India"
        },
        foodPreference: "",
        userType: "",
        foodStatus: "",
        password: "",
    });

    const handleSave = async () => {
        // Save user data to the database
        // console.log(userData);
        try {
            const response = await createUser(userData);
            if (response) {
                Alert.alert("User created successfully!");
                // reset the form
                setUserData({
                    ...userData, // TODO: Reset address next time
                    name: "",
                    phoneNumber: "",
                    roomNumber: "",
                    foodPreference: "",
                    userType: "",
                    foodStatus: "",
                    password: "",
                });
            }
        } catch (error) {
            // console.error(error);
            // console.log(JSON.stringify(userData));
            Alert.alert("Error creating user!");
        }
    };

    const handleDropDownChange = (field, value) => {
        setUserData(prevState => ({
            ...prevState,
            [field]: value
        }));

        // Uncomment these lines if you want to dispatch actions for state updates
        // switch (field) {
        //     case 'foodPreference':
        //         dispatch(setPreferencesItems(value));
        //         break;
        //     case 'userType':
        //         dispatch(setUserType(value));
        //         break;
        //     case 'foodStatus':
        //         dispatch(setFoodStatus(value));
        //         break;
        //     default:
        //         break;
        // }
    };

    const handleTextChange = (field) => (text) => {
        setUserData(prevState => ({
            ...prevState,
            [field]: text
        }));
    };

    const data = [
        { id: 1, fieldName: "Name", fieldValue: userData.name, isEditable: true, type: "text", onChange: handleTextChange('name') },
        { id: 2, fieldName: "Phone Number", fieldValue: userData.phoneNumber, isEditable: true, type: "text", onChange: handleTextChange('phoneNumber') },
        { id: 3, fieldName: "Room Number", fieldValue: userData.roomNumber, isEditable: true, type: "text", onChange: handleTextChange('roomNumber') },
        { id: 4, fieldName: "Food Preference", fieldValue: userData.foodPreference, isEditable: true, type: "dropdown", options: preferencesItems, dropDownActive: false, defaultValue: "veg", onChange: value => handleDropDownChange('foodPreference', value) },
        { id: 5, fieldName: "User Type", fieldValue: userData.userType, isEditable: true, type: "dropdown", options: userType, dropDownActive: false, defaultValue: "user", onChange: value => handleDropDownChange('userType', value) },
        { id: 6, fieldName: "Food Status", fieldValue: userData.foodStatus, isEditable: true, type: "dropdown", options: foodStatus, dropDownActive: false, defaultValue: "opt-in", onChange: value => handleDropDownChange('foodStatus', value) },
        { id: 7, fieldName: "Password", fieldValue: userData.password, isEditable: true, type: "password", onChange: handleTextChange('password') },
    ];

    const renderItems = ({ item }) => {
        switch (item.type) {
            case "text":
                return (
                    <InfoField
                        fieldName={item.fieldName}
                        fieldValue={item.fieldValue}
                        isEditable={item.isEditable}
                        onChange={item.onChange}
                    />
                );
            case "dropdown":
                return (
                    <CustomDropDownPicker
                        pickerTitle={item.fieldName}
                        dropDownOpenState={item.dropDownActive}
                        options={item.options}
                        value={item.fieldValue}
                        onChange={item.onChange}
                    />
                );
            
            case "password":
                return (
                    <InfoField
                        fieldName={item.fieldName}
                        fieldValue={item.fieldValue}
                        isEditable={item.isEditable}
                        onChange={item.onChange}
                        type="password"
                    />
                );
            default:
                return (
                    <InfoField
                        fieldName={item.fieldName}
                        fieldValue={item.fieldValue}
                        isEditable={item.isEditable}
                    />
                );
        }
    };

    return (
        <SafeAreaView className="p-4 h-full bg-white">
            {/* <KeyboardAwareScrollView
                style={{ flex: 1 }}
                enableOnAndroid={true}
                keyboardShouldPersistTaps='handled'
            > */}

            {/* <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItems}
                style={{ flex: 1 }}
                ListFooterComponent={
                    <View className={`flex justify-end items-end`}>
                        <CustomButton
                            text="Save"
                            handlePress={handleSave}
                            buttonStyle="bg-primary rounded-md mt-2 mb-2 w-1/2"
                            textStyle={`font-pmedium text-base`}
                            />
                    </View>
                }
                /> */}
                <KeyboardAwareFlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItems}
                contentContainerStyle={{ paddingBottom: 100 }} // Adjust as needed
                ListFooterComponent={
                    <View className={`items-end`} style={{ padding: 16 }}>
                        <CustomButton
                            text="Save"
                            handlePress={handleSave}
                            buttonStyle="bg-primary rounded-md mt-2 mb-2 w-1/2"
                            textStyle="font-pmedium text-base"
                        />
                    </View>
                }
            />
            {/* </KeyboardAwareScrollView> */}
        </SafeAreaView>
    );
};

export default CreateUsers;

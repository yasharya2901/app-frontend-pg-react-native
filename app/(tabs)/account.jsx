import { Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import InfoField from '../../components/InfoField';
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from '../../components/CustomButton';

const Account = () => {
  const name = 'Yash';
  const [preferences, setPreferences] = useState('veg');
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [preferencesItems, setPreferencesItems] = useState([
    { label: 'Veg', value: 'veg' },
    { label: 'Non-Veg', value: 'non-veg' },
  ]);

  const data = [
    { id: 1, fieldName: 'Name', fieldValue: name, isEditable: false },
    { id: 2, fieldName: 'Room No.', fieldValue: '343', isEditable: false },
    { id: 3, fieldName: 'Meal-Status', fieldValue: 'Opt-in', isEditable: false },
    { id: 4, fieldName: 'Contact Number', fieldValue: '9876543210', isEditable: false },
    { id: 5, fieldName: 'Emergency Contact Number', fieldValue: '65432103234', isEditable: true },
  ];

  const address = [
    { id: 1, fieldName: 'Address Line 1', fieldValue: '123, ABC Street, XYZ City', isEditable: true },
    { id: 2, fieldName: 'Address Line 2', fieldValue: 'Near PQR Park', isEditable: true },
    { id: 3, fieldName: 'City', fieldValue: 'XYZ City', isEditable: true },
    { id: 4, fieldName: 'State', fieldValue: 'ABC State', isEditable: true },
    { id: 5, fieldName: 'Pincode', fieldValue: '123456', isEditable: true },
    { id: 6, fieldName: 'Country', fieldValue: 'India', isEditable: false },
  ]

  return (
    <SafeAreaView className={`flex-1 pl-4 pr-4`}>
      <Text className="text-lg text-center font-pbold mt-2">Account</Text>
      <Text className="font-pbold text-2xl mt-6 mb-6">Welcome, {name}!</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <InfoField fieldName={item.fieldName} fieldValue={item.fieldValue} isEditable={item.isEditable} />
        )}
        ListFooterComponent={
          <>
            <Text className={`text-base font-pmedium mb-2`}>Preferences</Text>
            <DropDownPicker
              open={preferencesOpen}
              value={preferences}
              items={preferencesItems}
              setOpen={setPreferencesOpen}
              setValue={setPreferences}
              setItems={setPreferencesItems}
              className="border rounded-xl h-14 mb-2" // NativeWind styling
              style={{
                borderWidth: 1,
                borderColor: '#9ca3af', // Customize border color here
                backgroundColor: "transparent"
              }}
              dropDownContainerStyle={{
                borderWidth: 1,
                borderColor: '#d3d3d3', // Customize border color here
                backgroundColor: "#F4F2F0"
                
              }}
              labelStyle={{
                fontSize: 12, // Customize text size
                fontFamily: 'Poppins-Medium', // Customize font family
              }}
            />

            <Text className={`text-base font-pmedium mt-4 mb-4`}>Address</Text>
            <FlatList
              data={address}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <InfoField fieldName={item.fieldName} fieldValue={item.fieldValue} isEditable={item.isEditable} />
              )}
            />
            <View className={`items-end`}>
              <CustomButton 
              // className="items-end"
                buttonStyle="bg-primary rounded-md mt-2 mb-2 w-1/2" 
                textStyle={`font-pmedium text-base`} 
                text='Update' 
                handlePress={()=>console.log("Update")}
              />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default Account;

import { View, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import React, {useState} from 'react';

const CustomDropDownPicker = ({pickerTitle, dropDownOpenState, options, value}) => {
    const [openState, setOpenState] = useState(dropDownOpenState);
    const [initialValue, setInitialValue] = useState(value);
    const [optionsList, setOptionsList] = useState(options);

  return (
    <View className="mb-4">
        <Text className="text-base font-pmedium mb-2">{pickerTitle}</Text>
        <DropDownPicker
            open={openState}
            value={initialValue}
            items={optionsList}
            setOpen={setOpenState}
            setValue={setInitialValue}
            setItems={setOptionsList}
            className="border rounded-xl h-14 mb-2" // NativeWind styling
            style={{
                borderWidth: 1,
                borderColor: '#9ca3af', // Customize border color here
                backgroundColor: "transparent"
              }}
              dropDownContainerStyle={{
                borderWidth: 1,
                borderColor: '#d3d3d3', // Customize border color here
                backgroundColor: "#F4F2F0",
                elevation: 1                
              }}
              labelStyle={{
                fontSize: 12, // Customize text size
                fontFamily: 'Poppins-Medium', // Customize font family
              }}
        />
    </View>
  )
}

export default CustomDropDownPicker
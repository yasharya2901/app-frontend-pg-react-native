import { View, Text } from 'react-native'
import React from 'react'
import { Picker } from '@react-native-picker/picker'

const CustomDropDownPicker = React.memo(({ pickerTitle, dropDownOpenState, options, value, onChange }) => {
    
    // console.log(pickerTitle);
    // console.log(`dropDownOpenState: ${dropDownOpenState} and typeof: ${typeof dropDownOpenState}`);
    // console.log(`options: ${options} and typeof: ${typeof options}`);
    // console.log(options);
    // console.log(`value: ${value} and typeof: ${typeof value}`);
    // console.log(`onChange: ${onChange} and typeof: ${typeof onChange}`);
    
  return (
      <View className="mb-4">
        <Text className="text-base font-pmedium mb-2">{pickerTitle}</Text>
        <Picker
            selectedValue={value}
            onValueChange={(itemValue) => onChange(itemValue)}
        >
            {options.map(({label, value}) => (
                <Picker.Item key={value} label={label} value={value} />)
            )}
        </Picker>
      </View>
  )
})

export default CustomDropDownPicker
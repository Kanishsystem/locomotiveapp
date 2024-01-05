import React, { useState } from 'react';
import { View, Picker } from 'react-native';
const SelectBoxExample = () => {
    const [selectedValue, setSelectedValue] = useState('option1');
  
    return (
      <View>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        
        >
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
          <Picker.Item label="Option 4" value="option4" />
        </Picker>
      </View>
    );
  };
  
  export default SelectBoxExample;
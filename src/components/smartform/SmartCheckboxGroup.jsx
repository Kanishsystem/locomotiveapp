import React, { useState } from 'react';
import { View, StyleSheet, ScrollView,Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

const SmartCheckboxGroup = ({options,onPress}) => {
  const [checkedItems, setCheckedItems] = useState({});
  
  const handleCheckboxPress = (item) => {
    setCheckedItems((prevCheckedItems) => {
      const updatedItems = {
        ...prevCheckedItems,
        [item]: !prevCheckedItems[item],
      };
      onPress(updatedItems);
      return updatedItems;
    });
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {options.map((item) => (
        <View style={styles.checkboxContainer} key={item}>
          <Checkbox.Item
            label=""
            status={checkedItems[item] ? 'checked' : 'unchecked'}
            onPress={() => handleCheckboxPress(item)}
            style={{padding:0,margin:0,}}
          
          />
          <View style={styles.labelContainer}>
            <Text>{item}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
       justifyContent: 'space-between',
      maxWidth:"100%"
    },
    checkboxContainer: {
      width: '24%', // Adjust the width as needed to fit four checkboxes in a row
      marginBottom: 3,
      flexDirection: 'row',
      alignItems: 'center',

    },
    labelContainer: {
      // marginLeft: 1,
    },
  });

export default SmartCheckboxGroup;
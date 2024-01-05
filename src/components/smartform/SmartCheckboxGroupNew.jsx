import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Checkbox } from "react-native-paper";

const SmartCheckboxGroupNew = ({ options, onPress }) => {
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
    <View style={styles.container}>
      {options.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((item, itemIndex) => (
            <View key={itemIndex} style={[styles.item,item.style]}>
              <Checkbox.Item
                label=""
                status={checkedItems[item.value] ? "checked" : "unchecked"}
                onPress={() => handleCheckboxPress(item.value)}
                style={{ padding: 0, margin: 0 }}
                color="#64E5F8"
              />
                <Text style={{marginLeft:-15}}>{item.value}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding:10
   // minHeight:200
  },
  row: {
    flexDirection: 'row',
    marginBottom: 0,
    justifyContent:"center"
  },
  item: {
    width: "28%",
    height: 50,
   // backgroundColor: 'blue',
    margin: 5,
    marginBottom:0,
    marginLeft:0,
    justifyContent: 'left',
    alignItems: 'center',
    flexDirection:'row'
  },
});

export default SmartCheckboxGroupNew;

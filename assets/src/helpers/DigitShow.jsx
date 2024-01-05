import React from "react";
import { View, StyleSheet,Text } from "react-native";


const DigitShow = ({ digits, type, value }) => {
  const numbers = Array.from({ length: digits }, (_, index) => index);


  const getDigit = (index) => {
    let value_d = value.padStart(digits, '#');
    if(type=="end"){
        value_d = value.padEnd(digits,"#");
    }
    let digit_out= value_d[index] ? value_d[index] : "#";
    return digit_out!="#" ? digit_out : "";
  };
  const getSingle=(num,index)=>{
    let s_value = getDigit(num);
    return  <Text key={index} style={styles.cat_text_1}>{s_value}</Text>
  }
  return (
    <View style={styles.subValue}>
      {numbers.map((num, index) => (
        getSingle(num,index)
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    subValue: {
        display: "flex",
        flexDirection: "row",
        paddingVertical: 10,
      },
      cat_text_1: {
        fontWeight: "600",
        fontSize: 30,
        color: "black",
        backgroundColor: "#ddd",
        height: 35,
        marginHorizontal: 2,
        width: 20,
      },
});

export default DigitShow;

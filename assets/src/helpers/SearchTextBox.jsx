import React,{ useState } from 'react';
import { View, TextInput, Image,StyleSheet, Text  } from 'react-native';
import logo from "./../../assets/usericon.png";
const SearchTextBox = ({placeholder,OnChange}) => {
  return (
    <View style={styles.container}> 
      <Image source={logo} style={styles.icon} />
      <TextInput
        style={styles.input}       
        onChangeText={OnChange}      
        placeholder={placeholder}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    alignItems:'center',  
    marginVertical:5,
    width:"100%",
    borderColor: '#ccc',
    borderRadius: 5, 
    borderWidth:1,
    flexDirection:'row',
    padding:6      
  },
  input: {
   height:30,
   padding:5,
   width:"100%" 
  },
  icon:{
    width:20,
    height:20,
    marginLeft:15,
    marginRight:5
  }  
});

export default SearchTextBox;  
import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return (
   <View>
    <Text>jo</Text>
   </View>
  );
};

const styles = StyleSheet.create({
  TopView:{
    backgroundColor:"red",
    height:45,
    
    
  },
  TopHeading:{
    fontSize:20,
    color:'white',
    fontWeight:'700',
    marginLeft:10,
  },
 container_1:{
  backgroundColor:"#73716b",
  height:45,
 },
  container_2:{
    height:60,
    backgroundColor:"#f7e2a8",
    display:"flex",
     flexDirection:"column",
   
    justifyContent:"flex-end",
    borderBottomWidth:1,
    borderColor:"black"
    

  }
  
});


export default DetailsScreen;
import React,{ useState } from 'react';
import {StyleSheet,Pressable,Text  } from 'react-native';

const CustomButton = ({OnPress,text,type='PRIMARY'}) => {
  const checkpress=()=>{
    console.log("pressed");
  }    
  return (
    <Pressable
   onPress={() => OnPress()}
    style={[styles.container,styles[`container_${type}`]]}
    >
         <Text style={[styles.text,styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
      width:'100%',
      marginVertical:5,
      padding:10,
      alignItems:'center',
      borderRadius:5
    },
    container_PRIMARY:{
      backgroundColor:'#0A4B44'
    },
    container_SECONDARY:{
        backgroundColor:'white'
    },
    text:{
      fontWeight:'bold',
      color:'white'
    },
    text_SECONDARY:{
        color:'#3b71f3'
    }
  });

export default CustomButton;


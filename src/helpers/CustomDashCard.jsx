import React,{ useState } from 'react';
import {StyleSheet,Pressable,Text  } from 'react-native';

const CustomDashCard = ({OnPress,text,value,type='PRIMARY'}) => {    
  return (
    <Pressable
    onPress={OnPress}
    style={[styles.container,styles[`container_${type}`]]}
    >
     <Text style={[styles.text,styles[`text_${type}`]]}>{text}</Text>
     <Text style={[styles.text,styles[`text_${type}`]]}>{value}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {     
      marginVertical:5,
      padding:10,
      alignItems:'center',
      borderRadius:5,
      marginRight: 10, 
      flex:1,
      
    },
    container_PRIMARY:{
      backgroundColor:'#0A4B44'
    },
    container_SECONDARY:{
        backgroundColor:'#e6fff9',
        borderColor:'#80ffdf',
        borderWidth:1,
        borderRadius:5
    },
    container_SECONDARY_FULL:{     
      width:'100%',
      backgroundColor:'#e6fff9',
      borderColor:'#80ffdf',
      borderWidth:1,
      borderRadius:5
  },
    text:{
      fontWeight:'bold',
      color:'white',
      fontSize:11
    },
    text_SECONDARY:{
        color:'#000',
        fontSize:16,
      fontWeight:500
    },
    text_SECONDARY_FULL:{
      color:'#000',
      fontSize:16,
      fontWeight:500
   }
  });

export default CustomDashCard;


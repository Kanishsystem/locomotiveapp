import React,{ useState } from 'react';
import {StyleSheet,Pressable,Text,Image, ScrollView  } from 'react-native';

const CustomDashCardIcon = ({OnPress,text,img,style}) => {   
 
  return (
    
    <Pressable onPress={OnPress}
    style={[styles.container,style]}
    >
     <Image source={img} style={{width:50,height:50}} />
       <Text style={styles.text}>{text}</Text>   
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {     
      marginVertical:5,     
      alignItems:'center',
      borderRadius:9,
      marginRight: 10,
      borderWidth:0.1,
     // borderColor:"#ddd",
      borderBottomWidth:5,
      borderBottomColor:"#0A4B44",
     // paddingBottom:10,
      flex:1,
      padding:30
           
    },   
    text:{      
      color:'#000',
      fontSize:11,
      marginBottom:12,
      marginVertical:20,
      textAlign:"center"
    },
    img:{
      width:40,
      height:40
    }
  });

export default CustomDashCardIcon;


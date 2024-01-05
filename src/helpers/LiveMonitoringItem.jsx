import React, { useEffect, useState }from "react";
import {StyleSheet,Pressable,Text,View,Image  } from 'react-native';
import logo from "./../../assets/car.png";
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../api/SiteColors';

const LiveMonitoringItem = ({OnPress,deviceId,address,footer}) => {    
  return (
    <Pressable onPress={OnPress}
    style={styles.container}
    >
        
        <Icon style={styles.image} name="bus" size={28} color={COLORS.PRIMARY} />
         <View style={styles.content}>
             <Text key="device" style={styles.device}>{deviceId}</Text>
             <Text key="address" style={styles.address} >{address}</Text>
             <Text key="footer" style={styles.footer} >{footer}</Text>
         </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: { 
      flexDirection:"row",
      width:"100%",
      marginBottom:10,
      backgroundColor:"#FFF",
      borderWidth:1,
      borderColor:"#f2f2f2",
      padding:5,
      borderRadius:3
    },
    content:{
      flexDirection:'column',
      alignItems:"left",            
    },
    image:{
      //width:20,
      //height:20,
      marginRight:10,
      marginTop:10
    },
    device:{
      fontSize:11,
      marginBottom:3,
      color:"#ff9900"
    },
    address:{
      fontSize:11,
      marginBottom:3,
      color:"#ff00ff"
    },
    footer:{
      fontSize:10,
      color:"#0A4B44"    
    }
  });

export default LiveMonitoringItem;


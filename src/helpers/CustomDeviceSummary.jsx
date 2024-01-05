import React,{ useState } from 'react';
import {StyleSheet,Pressable,Text,View,Image  } from 'react-native';
import logo from "./../../assets/usericon.png";

const CustomDeviceSummary = ({OnPress,deviceId,name,imei,status}) => {    
  return (
    <View  style={styles.container}> 
         <View key={"main-cont-1"} style={styles.header}>
            <Image source={logo} style={styles.image} />
             <Text>{deviceId}</Text>
         </View>        
         <View key={"main-cont-2"} style={styles.body}>
             <View style={styles.bodyleft}>
                 <View key={"sub-cont-1"} style={styles.bodytext}><Text style={styles.textHeader}>Device IMEI</Text><Text>{imei}</Text></View>
                 <View key={"sub-cont-2"} style={styles.bodytext}><Text style={styles.textHeader}>Owner Name</Text><Text>{name}</Text></View>
                 <View key={"sub-cont-3"} style={styles.bodytext}><Text style={styles.textHeader}>Device Status</Text><Text>{status}</Text></View>
             </View>
             <Pressable OnPress={OnPress} style={styles.info} >
                <Image source={logo} style={styles.image} />
            </Pressable>
         </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {     
      marginVertical:5,
      alignItems:'center',    
      flex:1,
      borderColor:"#ecf9f2",
      borderWidth:1,
      borderRadius:2
    },
    image:{
      width:15,
      height:15,
      marginRight:10,
      marginTop:1
    },
    header:{
      flexDirection:'row',
      width:'100%',
      backgroundColor:'rgba(10, 75, 68, 0.6)',
      color:"#0A4B44",    
      padding:5,
      borderTopLeftRadius:2,
      borderTopRightRadius:2    
    },
    body:{ 
      alignItems: 'center',
      flexDirection: 'row',
      padding:5,
      width:'100%',
    },
    bodytext:{
      width:'100%', 
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom:6,
    },
    bodyleft:{
      width:"90%",
      textAlign: 'left',
    },
    info:{
      width:"10%", // Takes up as much space as possible
      textAlign: 'right',
    },
    textHeader:{
     width:110,
     color:"#0A4B44",
     fontWeight:"700"    
    },

    container_PRIMARY:{
      backgroundColor:'#3b71f3'
    },
    container_SECONDARY:{
        backgroundColor:'white',
        borderColor:'#3b71f3',
        borderWidth:2
    },
    container_SECONDARY_FULL:{
      backgroundColor:'white',
      width:'100%',
      borderColor:'#3b71f3',
      borderWidth:2

  },
    text:{
      fontWeight:'bold',
      color:'white'
    },
    text_SECONDARY:{
        color:'#3b71f3'
    },
    text_SECONDARY_FULL:{
      color:'#3b71f3'
   }
  });

export default CustomDeviceSummary;


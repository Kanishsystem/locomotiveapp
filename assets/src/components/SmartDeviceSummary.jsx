import React, { useState } from 'react';
import { StyleSheet, Pressable, Text, View, Image } from 'react-native';
//import logo from "./../../assets/usericon.png";
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLORS } from '../api/SiteColors';

const SmartDeviceSummary = ({ OnPress, title, headings, body_content,bodyColors,
  infoButton=true,bus=true,headerStyle={},iconData=null,headColors }) => {

  const singleBodyContent=(value,index)=>{
    let style = bodyColors && bodyColors[index] ? bodyColors[index] : {};
    let hStyle = headColors && headColors[index] ? headColors[index] : {};
   // console.log("index " , index , "styles " , style);
    return (     
         <View key={index} style={styles.bodytext}>
            <Text key={"test_1"} style={[styles.textHeader,hStyle]}>{headings[index]}</Text>
            <Text key={"test_2"} style={[styles.textContent,style]}>{body_content[index]}</Text>
         </View>
     
    )
  }

  const dataRowInfo = () => {
    return (
      <View style={styles.container}>
        <View key={"main-cont-1"} style={[styles.header,headerStyle]}>
          {bus && <Icon style={styles.image} name="bus" size={18} color={COLORS.PRIMARY} />}
          <Text style={{fontWeight:"400", color:COLORS.PRIMARY}}>{title}</Text>
        </View>
        <View key={"main-cont-2"} style={styles.body}>
          <View style={styles.bodyleft}>
            {body_content.map((value, index) => (
              singleBodyContent(value,index)
            ))}
          </View>
          <Pressable onPress={() => OnPress(title)} style={styles.info} >
            <Icon name={"info-circle"} size={30} color={COLORS.PRIMARY} />
          </Pressable>
        </View>
      </View>
    )
  }

  const dataRowPress=()=>{
    return (
      <Pressable style={styles.container} onPress={() => OnPress(title)} >
        <View key={"main-cont-1"} style={[styles.header,headerStyle]}>
        {bus && <Icon style={styles.image} name="bus" size={18} color={COLORS.PRIMARY} />}
          <Text style={{fontWeight:"400",color:COLORS.PRIMARY}}>{title}</Text>
        </View>
        <View key={"main-cont-2"} style={styles.body}>
          <View style={styles.bodyleft}>
            {body_content.map((value, index) => (
             singleBodyContent(value,index)
            ))}
          </View>        
        </View>
        {iconData && <View style={styles.info}>{iconData()}</View>}
      </Pressable>
    )
  }
  return infoButton ? dataRowInfo() : dataRowPress();
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    alignItems: 'center',
    flex: 1,
    borderColor: "#ecf9f2",
    borderWidth: 1,
    borderRadius: 2
  },
  image: {
    marginRight: 10,
    marginTop: 1,
    color:COLORS.PRIMARY
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'rgba(10, 75, 68, 0.4)',
    color: "#0A4B44",
    padding: 5,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    fontWeight:"600"
  },
  body: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    width: '100%',
    borderWidth:1,
    borderColor:"#ddd"
  },
  bodytext: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 6,
  },
  bodyleft: {
    width: "92%", // Takes up as much space as possible
    textAlign: 'left',
  },
  info: {
    width: "8%", // Takes up as much space as possible
    textAlign: 'right',
  },
  textHeader: {
    width: "40%",
    color: "#0A4B44",
    fontWeight: "400"
  },
  textContent: {
    width: "60%",
  },

  container_PRIMARY: {
    backgroundColor: '#3b71f3'
  },
  container_SECONDARY: {
    backgroundColor: 'white',
    borderColor: '#3b71f3',
    borderWidth: 2
  },
  container_SECONDARY_FULL: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: '#3b71f3',
    borderWidth: 2

  },
  text: {
    fontWeight: 'bold',
    color: 'white'
  },
  text_SECONDARY: {
    color: '#3b71f3'
  },
  text_SECONDARY_FULL: {
    color: '#3b71f3'
  }
});

export default SmartDeviceSummary;


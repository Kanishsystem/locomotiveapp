import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity,Image } from "react-native";
import { IMAGES } from "./api/ImageSrc";

const TopIconBar = ({ navigation,route }) => { 
  //console.log("route navigation " , route.name);
  const setNavigation=(navIndex)=>{
    //console.log("navigation set " , navIndex);
    navigation.navigate(navIndex);
  }

  const getActiveStyle=(name)=>{
    return route.name==name ? styles.active : {};
  }

  return (
    <View style={styles.TopView}>
        <TouchableOpacity onPress={() => setNavigation("screen1")} style={[styles.iconcont,getActiveStyle("screen1")]}>
          <Image source={IMAGES.lOGO} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setNavigation("screen2")} style={getActiveStyle("screen2")} >
          <Image source={IMAGES.TOP_TWO} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setNavigation("screen3")} style={getActiveStyle("screen3")} >
          <Image source={IMAGES.MAIN} style={styles.image} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  TopView: {
    display: "flex",
    flexDirection: "row",
    //justifyContent: "space-between",
  },
  image: {
    width:50,
    height:50
  }, 
  active:{
    borderWidth:1,
    borderColor:"#ddd"  
  },
  iconcont:{
    padding:5
  }
});

export default TopIconBar;

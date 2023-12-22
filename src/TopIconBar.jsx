import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity,Image } from "react-native";
import { IMAGES } from "./api/ImageSrc";

const TopIconBar = ({ navigation }) => { 
  const setNavigation=(navIndex)=>{
    console.log("navigation set " , navIndex);
    navigation.navigate(navIndex);
  }
  return (
    <View style={styles.TopView}>
        <TouchableOpacity onPress={() => setNavigation("screen1")}>
          <Image source={IMAGES.MAIN} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setNavigation("screen2")}>
          <Image source={IMAGES.MAIN} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setNavigation("screen3")}>
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
});

export default TopIconBar;

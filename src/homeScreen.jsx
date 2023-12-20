import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (

    <><View style={styles.TopView}>
      <Text style={styles.TopHeading} >Results</Text>
    </View>
    {/* <View key="sub-cont-1">
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')} />

      </View> */}

      <View  style={styles.container_1}>
        test

      </View>
        <View key="sub-cont-1">
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')} />

      </View> 
      {/* <View  style={styles.container_2}>
        <Text>Lotomatic 4D</Text>
        <Text>20-12-2023</Text>
      </View> */}
      
      </>

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

export default HomeScreen;


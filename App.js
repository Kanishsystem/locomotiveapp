import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Navigation from './src/Navigation';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';




 const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style="auto"/>

   
     <Navigation/>
   

    </>
     
 
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "red",
//   },
// });
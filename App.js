import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./src/Navigation";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import {
  PaperProvider,
  DefaultTheme,
  BottomNavigation,
} from "react-native-paper";
import Cat2 from "./src/cat2";
import Loto6D from "./src/Loto6D";

const myCustomTheme = {
  ...DefaultTheme,

  mode: "light", // Set the theme mode to 'light'
  // Add more customizations as needed
};

const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>

 <Loto6D></Loto6D>
     {/* <PaperProvider theme={myCustomTheme}>
      <StatusBar style="auto" />
      <Navigation />
      </PaperProvider> */}
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "red",
//   },
// });

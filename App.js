import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./src/Navigation";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import {
  PaperProvider,
  DefaultTheme
} from "react-native-paper";
import Cat2 from "./src/LocoMotive3d";
import Loto6D from "./src/Loto6D";

import { LoadingProvider } from "./src/Helpers/LoadingContext";

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
      <PaperProvider theme={myCustomTheme}>
        <LoadingProvider>
          <StatusBar style="auto" />
          <Navigation />
        </LoadingProvider>
      </PaperProvider>
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "red",
//   },
// });

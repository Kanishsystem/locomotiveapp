import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./src/Navigation";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { LoadingProvider } from "./src/Helpers/LoadingContext";
import { StyleSheet,View,SafeAreaView,StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import { COLORS } from "./src/api/ImageSrc";


const myCustomTheme = {
  ...DefaultTheme,
  mode: "light"
};

const Stack = createStackNavigator();
// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <PaperProvider theme={myCustomTheme}>
        <LoadingProvider>
          <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor={COLORS.MAIN} barStyle="light-content" /> 
          
            <Navigation />
          </SafeAreaView>
        </LoadingProvider>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A4B44",
  },
});


import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./src/Navigation";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { LoadingProvider } from "./src/Helpers/LoadingContext";
import { StyleSheet,View,SafeAreaView,StatusBar} from 'react-native';


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
          <StatusBar backgroundColor="#5c0819" barStyle="light-content" /> 
          
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


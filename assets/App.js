import { StyleSheet, SafeAreaView, StatusBar, View } from "react-native";
import StackNavigationSite from "./src/screens/Main/StackNavigationSite";
import { LoadingProvider } from "./src/screens/Main/LoadingContext";
import {
  PaperProvider,
  DefaultTheme,
  BottomNavigation,
} from "react-native-paper";
//import { GestureHandlerRootView } from "react-native-gesture-handler";

const myCustomTheme = {
  ...DefaultTheme,

  mode: "light", // Set the theme mode to 'light'
  // Add more customizations as needed
};

export default function App() {
  return (
    <PaperProvider theme={myCustomTheme}>
      <LoadingProvider>
       
          <View style={styles.container}>
            <StackNavigationSite />
            <StatusBar backgroundColor="#0A4B44" barStyle="light-content" />
          </View>
       
      </LoadingProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A4B44",
  },
});

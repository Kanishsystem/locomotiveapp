
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
/** Home and Login Screens **/

import HomeNewScreen from "../Home/HomeNewScreen";
import LocoMotiveThreed from "../Home/LocoMotiveThreed";
import LocoMotiveSixd from "../Home/LotoMotiveSixd";


const Stack = createNativeStackNavigator();

const StackNavigationSite = () => {
  return (
   
    <NavigationContainer>
    
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#0A4B44", // Set the background color for the header
          },
          headerTintColor: "white", // Set the text color for the header
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >  
       
        <Stack.Screen name="HomeNew" component={HomeNewScreen}  />
        <Stack.Screen name="Locomotivethree" component={LocoMotiveThreed}  />
        <Stack.Screen name="Locomotivesix" component={LocoMotiveSixd}  />
      
      
        
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

export default StackNavigationSite;

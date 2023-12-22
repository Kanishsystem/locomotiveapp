import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './homeScreen.jsx';
import DetailsScreen from './DetailsScreen.jsx';
import Cat2 from './cat2.jsx';
import Loto6D from './Loto6D.jsx';




const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator    screenOptions={{
          headerShown: false,}} >
        <Stack.Screen name="screen1" component={HomeScreen} />
        <Stack.Screen name="screen2" component={DetailsScreen} />
        <Stack.Screen name="screen3" component={Cat2} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './homeScreen.jsx';
import DetailsScreen from './DetailsScreen.jsx';
import Cat2 from './cat2.jsx';




const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator    screenOptions={{
          headerShown: false,}} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Cat_2" component={Cat2} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
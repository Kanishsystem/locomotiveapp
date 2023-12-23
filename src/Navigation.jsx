import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LocoMotive3d from './LocoMotive3d.jsx';
import Loto6D from './Loto6D.jsx';
import HomeNewScreen from './HomeNewScreen.jsx';




const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator    screenOptions={{
          headerShown: false,}} >
        <Stack.Screen name="screen1" component={HomeNewScreen} />
        <Stack.Screen name="screen2" component={LocoMotive3d} />
        <Stack.Screen name="screen3" component={Loto6D} />     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
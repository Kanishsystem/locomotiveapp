import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LocoMotive3d from './LocoMotive3d.jsx';
import LotoMotive6d from './LotoMotive6d.jsx';
import HomeNewScreen from './HomeNewScreen.jsx';
import { useLoading } from "./Helpers/LoadingContext";
import HeaderScreen from './HeaderScreen';


const Stack = createStackNavigator();

const Navigation = () => {
  const { setDate } = useLoading();
  return (
    <>
    <HeaderScreen setDate={setDate} />   
    <NavigationContainer>
      <Stack.Navigator    screenOptions={{
          headerShown: false,}} >
        <Stack.Screen name="screen1" component={HomeNewScreen} />
        <Stack.Screen name="screen2" component={LocoMotive3d} />
        <Stack.Screen name="screen3" component={LotoMotive6d} />     
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default Navigation;
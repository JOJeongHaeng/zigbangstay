import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import HomeScreen from '../screens/HomeScreen'; // Home Screen
import ModuleHomeScreen from '../screens/ModuleHomeScreen'; 
import MapScreen from '../screens/MapScreen'; // Map Screen
import MenuScreen from '../screens/MenuScreen'; // 서브 창 화면
import DetailScreen from '../screens/DetailScreen'; 
import PropertyScreen from '../screens/PropertyScreen'; 
import PotatoListScreen from '../screens/PotatoListScreen'; 
import AsiteScreen from '../screens/site/AsiteScreen'; 


const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ModuleHomeScreen" component={ModuleHomeScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{
            presentation: 'transparentModal', // 반투명 배경 지원
            headerShown: false,
          }}
        /> 
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            presentation: 'transparentModal', // 반투명 배경 지원
            headerShown: false,
          }}
        />
        <Stack.Screen name="PropertyScreen" component={PropertyScreen} />
        <Stack.Screen
          name="PotatoListScreen"
          component={PotatoListScreen}
          options={{
            gestureEnabled: false, // 제스처 비활성화
          }}
        />
        <Stack.Screen name="AsiteScreen" component={AsiteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

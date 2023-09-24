/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
} from 'react-native';


//Navigation
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"

//screens
import HomeScreen from './Screens/HomeScreen';
import WelcomeScreen from './Screens/WelcomeScreen';
import AuthenticationScreen from './Screens/AuthenticationScreen';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  AuthenticationScreen: {productId: string};
  HomeScreen : undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>()



function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen'>
        <Stack.Screen
        name='WelcomeScreen'
        component={WelcomeScreen} 
        />
        <Stack.Screen
        name='AuthenticationScreen'
        component={AuthenticationScreen}
        options={{
          title: "Enter mobile number"
        }}
        />
        <Stack.Screen
        name ='HomeScreen'
        component={HomeScreen}
        options={{
          title: "HomeScreen"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


export default App;

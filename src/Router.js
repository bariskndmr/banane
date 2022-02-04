import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from 'pages/Login';
import Signup from 'pages/Signup';
import Home from 'pages/Home';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupPage"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen name="HomePage" component={Home} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default Router;

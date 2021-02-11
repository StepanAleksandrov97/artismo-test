import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoggedOut} from '../screens/loggedOut';
import {Register} from '../screens/auth/register';
import {Home} from '../screens/home/home';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="LoggedOut">
      <Stack.Screen name="LoggedOut" component={LoggedOut} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

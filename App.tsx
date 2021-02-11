import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { Home, LoggedOut, Register } from './src/screens';
import { createStackNavigator } from '@react-navigation/stack';

declare const global: {HermesInternal: null | {}};
const Stack = createStackNavigator();

const Navigation = () => {
  //TODO 
  return (
    <Stack.Navigator headerMode="none" initialRouteName="LoggedOut">
      <Stack.Screen name="LoggedOut" component={LoggedOut} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { HomeNavigation, StartScreen, RegisterFirstScreen, RegisterSecondScreen } from './src/screens';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TabParamList } from './src/screens/home/homeNavigation';
import { Login } from './src/screens/login';

declare const global: {HermesInternal: null | {}};

type RootStackParamList = {
  LoggedOut: undefined;
  RegisterFirstStep: undefined;
  RegisterSecondStep: undefined;
  Login: undefined;
  Home: NavigatorScreenParams<TabParamList>;
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  //TODO 
  return (
    <Stack.Navigator headerMode="none" initialRouteName="LoggedOut" >
      <Stack.Screen name="LoggedOut" component={StartScreen} />
      <Stack.Screen name="RegisterFirstStep" component={RegisterFirstScreen} />
      <Stack.Screen name="RegisterSecondStep" component={RegisterSecondScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeNavigation} />
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

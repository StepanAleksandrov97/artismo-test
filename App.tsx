import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeNavigation, StartScreen, RegisterFirstScreen, RegisterSecondScreen, Chat, Login } from './src/screens';
import { TabParamList } from './src/screens/home/homeNavigation';

declare const global: {HermesInternal: null | {}};

type RootStackParamList = {
  LoggedOut: undefined;
  RegisterFirstStep: undefined;
  RegisterSecondStep: undefined;
  Login: undefined;
  Home: NavigatorScreenParams<TabParamList>;
  Chat: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  //TODO 
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home" >
      <Stack.Screen name="LoggedOut" component={StartScreen} />
      <Stack.Screen name="RegisterFirstStep" component={RegisterFirstScreen} />
      <Stack.Screen name="RegisterSecondStep" component={RegisterSecondScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={HomeNavigation} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;

import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomeScreen, Search, Chats, Chat } from '../../screens';


export type TabParamList = {
  Home: undefined;
  Search: undefined;
  Add: undefined;
  Chats: undefined;
  Profile: undefined;
}

const Tab = createBottomTabNavigator<TabParamList>();

export const HomeNavigation = () => {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Add" component={HomeScreen} />
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
};

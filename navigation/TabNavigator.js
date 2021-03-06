import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Matches from '../screens/Matches';
import { TabNavigator } from 'react-navigation';
import Expo from 'expo';

export default TabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
      }
    },
    Matches: {
      screen: Matches,
      navigationOptions: {
        tabBarLabel: 'Matches',
      },
    },
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarPosition: 'top',
    initialRouteName: 'Home',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: '#df4723',
      inactiveTintColor: 'lightgray',
      indicatorStyle: {
        backgroundColor: '#df4723'
      },
      style: {
        height: 75,
        paddingTop: Expo.Constants.statusBarHeight,
        elevation: 0,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderBottomColor: '#df4723'
      },
      
    }
  }
);
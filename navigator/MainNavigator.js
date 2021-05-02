import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';
import SavedScreen from '../screens/SavedScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'kno-logic',
    }
  },
  Article: {
    screen: ArticleScreen,
    navigationOptions: {
      headerTitle: 'Article',
    }
  }
}, {
  defaultNavigationOptions: {
    headerTitle: 'A Screen',
  }
});

const MainNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-home' size={25} color={'black'}/>;
      },
      tabBarColor: 'violet',
    }
  },
  Saved: {
    screen: SavedScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-bookmark' size={25} color={'black'}/>;
      },
      tabBarColor: 'violet',
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-person' size={25} color={'black'}/>;
      },
      tabBarColor: 'violet',
    }
  }
});

export default createAppContainer(MainNavigator);

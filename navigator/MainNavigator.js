import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ArticleScreen from '../screens/ArticleScreen';
import SavedScreen from '../screens/SavedScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AuthScreen from '../screens/AuthScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';

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
  },
  Calendar: {
    screen: CalendarScreen,
    navigationOptions: {
      headerTitle: 'Calendar',
    }
  }
}, {
  defaultNavigationOptions: {
    headerTitle: 'A Screen',
  }
});

const SavedNavigator = createStackNavigator({
  Saved: {
    screen: SavedScreen,
    navigationOptions: {
      headerTitle: 'Saved Articles',
    }
  }
});

const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      headerTitle: 'My Account',
    }
  },
  Auth: {
    screen: AuthScreen,
    navigationOptions: {
      headerTitle: 'Join Us',
    }
  },
  Reset: {
    screen: ResetPasswordScreen,
    navigationOptions: {
      headerTitle: 'Reset Password',
    },
  }
});

const MainNavigator = createBottomTabNavigator({
  Saved: {
    screen: SavedNavigator,
    navigationOptions: {
      tabBarIcon: ({ focused }) => {
        let iconName;
        focused ? iconName = "ios-bookmark" : iconName = "ios-bookmark-outline"
        return <Ionicons name={iconName} size={25} color={'black'}/>;
      },
      tabBarColor: '#E8EFF7',
    },
  },
  Daily: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarIcon: ({ focused }) => {
        let iconName;
        focused ? iconName = "newspaper-variant" : iconName = "newspaper-variant-outline"
        return <MaterialCommunityIcons name={iconName} size={24} color="black" />;
      },
      tabBarColor: '#E8EFF7',
    },
  },
  Profile: {
    screen: ProfileNavigator,
    navigationOptions: {
      tabBarIcon: ({ focused }) => {
        let iconName;
        focused ? iconName = "ios-person" : iconName = 'ios-person-outline'
        return <Ionicons name={iconName} size={25} color={'black'}/>;
      },
    },
  }
}, {
  tabBarOptions: {
    activeTintColor: 'black',
  },
  initialRouteName: 'Daily',
});

export default createAppContainer(MainNavigator);

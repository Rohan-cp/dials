import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import CalendarScreen from "../screens/CalendarScreen";
import ArticleScreen from "../screens/ArticleScreen";
import SavedScreen from "../screens/SavedScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AuthScreen from "../screens/AuthScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import EditUserdataScreen from "../screens/EditUserdataScreen";
import PasswordEditScreen from "../screens/PasswordEditScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: "kno-logic" }}
      />
      <Stack.Screen
        name="ArticleScreen"
        component={ArticleScreen}
        options={{ headerTitle: "Article" }}
      />
      <Stack.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{ headerTitle: "Calendar" }}
      />
    </Stack.Navigator>
  );
}

function SavedStack() {
  return (
    <Stack.Navigator initialRouteName="Saved">
      <Stack.Screen
        name="SavedScreen"
        component={SavedScreen}
        options={{ headerTitle: "Saved Articles" }}
      />
      <Stack.Screen
        name="ArticleScreen"
        component={ArticleScreen}
        options={{ headerTitle: "Article" }}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerTitle: "My Account" }}
      />
      <Stack.Screen
        name="Authentication"
        component={AuthScreen}
        options={{ headerTitle: "Join Us" }}
      />
      <Stack.Screen
        name="Reset Password"
        component={ResetPasswordScreen}
        options={{ headerTitle: "Reset Password" }}
      />
      <Stack.Screen name="Edit Userdata" component={EditUserdataScreen} />
      <Stack.Screen
        name="Password Edit Screen"
        component={PasswordEditScreen}
      />
    </Stack.Navigator>
  );
}

function RootStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Daily"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => {
            let iconName;
            focused
              ? (iconName = "newspaper-variant")
              : (iconName = "newspaper-variant-outline");
            return (
              <MaterialCommunityIcons name={iconName} size={24} color="black" />
            );
          },
          tabBarColor: "#E8EFF7",
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedStack}
        options={{
          tabBarIcon: ({ focused }) => {
            let iconName;
            focused
              ? (iconName = "ios-bookmark")
              : (iconName = "ios-bookmark-outline");
            return <Ionicons name={iconName} size={25} color={"black"} />;
          },
          tabBarColor: "#E8EFF7",
        }}
      />
    </Tab.Navigator>
  );
}

export default RootStack;

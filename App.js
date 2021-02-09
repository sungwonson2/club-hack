import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {WelcomeScreen} from './app/Screens/WelcomeScreen'
import {LoginScreen} from './app/Screens/LoginScreen'
import {ForgotPasswordScreen} from './app/Screens/ForgotPasswordScreen'
import {SignupStudentScreen} from './app/Screens/SignupStudentScreen'
import {SignupClubMemberScreen} from './app/Screens/SignupClubMemberScreen'
import {HomeScreen} from './app/Screens/HomeScreen'
import {DiscoverScreen} from './app/Screens/DiscoverScreen'
import {MessagingScreen} from './app/Screens/MessagingScreen'
import {ScheduleScreen} from './app/Screens/ScheduleScreen'
import {ChatScreen} from './app/Screens/ChatScreen'
import {ProfileScreen} from './app/Screens/ProfileScreen'
import {SettingsScreen} from './app/Screens/SettingScreen'
import {ClubScreen} from './app/Screens/ClubScreen'
import {ClubCreationScreen} from './app/Screens/ClubCreationScreen'
import {PersonScreen} from './app/Screens/PersonScreen'
import {MembersScreen} from './app/Screens/MembersScreen'

import {firebase} from './app/FirebaseConfig'

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
 
const HomeTabs = () => {
  navigationOptions: {
    headerleft = null;
  }
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Messaging" component={MessagingScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{title: "Welcome"}}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
        <Stack.Screen
          name="SignupStudent"
          component={SignupStudentScreen}
        />
        <Stack.Screen
          name="SignupClubMember"
          component={SignupClubMemberScreen}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
        />
        <Stack.Screen
          name="Club"
          component={ClubScreen}
        />
        <Stack.Screen
          name="ClubCreation"
          component={ClubCreationScreen}
        />
        <Stack.Screen
          name="Person"
          component={PersonScreen}
        />
        <Stack.Screen
          name="Members"
          component={MembersScreen}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

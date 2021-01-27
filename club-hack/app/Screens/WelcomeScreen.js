import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TouchableWithoutFeedback, TextInput, ScrollView} from 'react-native';

export const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Text style = {styles.header}>Club Hack!</Text>
    <Button title = "Student" onPress = {() => navigation.navigate('SignupStudent')}></Button>
    <Button title = "Club Member" onPress = {() => navigation.navigate('SignupClubMember')}></Button>
    <Text style = {styles.underline}>OR</Text>
    <Button title = "Already a user?" onPress = {() => navigation.navigate('Login')}></Button>
    <StatusBar style="auto" />
    </View>    
  );
};
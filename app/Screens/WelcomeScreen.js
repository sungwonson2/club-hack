import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, Button} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

export const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={ContainerStyles.container}>
    <Text style = {TextStyles.header}>Club Hack!</Text>
    <Button title = "Student" onPress = {() => navigation.navigate('SignupStudent')}></Button>
    <Button title = "Club Member" onPress = {() => navigation.navigate('SignupClubMember')}></Button>
    <Text style = {TextStyles.underline}>OR</Text>
    <Button title = "Already a user?" onPress = {() => navigation.navigate('Login')}></Button>
    <StatusBar style="auto" />
    </View>    
  );
};
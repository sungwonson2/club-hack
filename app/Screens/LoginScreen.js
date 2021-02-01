import React from 'react';
import {Text, View, Button, TextInput} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

export const LoginScreen = ({ navigation, route }) => {
    return (    
      <View style={ContainerStyles.container}>
      <Text style = {TextStyles.header}>Login!</Text>
      <TextInput style = {ContainerStyles.input}>Email</TextInput>
      <TextInput style = {ContainerStyles.input}>Password</TextInput>
      <Button title = "Login" onPress = {() => navigation.navigate('Home')}></Button>
      <Button title = "Forgot Password?" onPress = {() => navigation.navigate('ForgotPassword')}></Button>
      </View>  
      );
  };
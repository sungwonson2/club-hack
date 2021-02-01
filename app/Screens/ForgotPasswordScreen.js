import React from 'react';
import {Text, View, TextInput} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

export const ForgotPasswordScreen = ({ navigation, route }) => {
    return (    
      <View style={ContainerStyles.container}>
      <Text style = {TextStyles.header}>Forgot Password</Text>
      <TextInput style = {ContainerStyles.input}>Email</TextInput>
      </View>  
      );
  };
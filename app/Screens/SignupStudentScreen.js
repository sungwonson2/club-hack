import React from 'react';
import {Text, View, Button, TextInput} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

export const SignupStudentScreen = ({ navigation, route }) => {
    return (    
      <View style={ContainerStyles.container}>
      <Text style = {TextStyles.header}>Sign up as a student!</Text>
      <Text>Name</Text>
      <TextInput style = {ContainerStyles.input}>Name</TextInput>
      <Text>Email</Text>
      <TextInput style = {ContainerStyles.input}>Email</TextInput>
      <Text>Interest</Text>
      <TextInput style = {ContainerStyles.input}>Interest</TextInput>
      <Text>Fun Fact</Text>
      <TextInput style = {ContainerStyles.input}>Fun Fact</TextInput>
      <Text>Social Preference</Text>
      <TextInput style = {ContainerStyles.input}>Social Preference</TextInput>
      <Button title = "Submit" onPress = {() => navigation.navigate('Home')}></Button>
      </View>  
      );
  };
import React from 'react';
import {Text, View, Button} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

export const SettingsScreen = ({ navigation, route }) => {
    return (    
      <View style={ContainerStyles.container}>
      <Text style = {TextStyles.header}>Settings</Text>
      <Button title = "Edit Profile" onPress = {() => navigation.navigate('ProfileChange')}/>
      <Button title = "Club Creation" onPress = {() => navigation.navigate('ClubCreation')}/>
      <Button title = "Log Out" onPress = {() => navigation.navigate('Welcome')}/>
      </View>  
      );
  };
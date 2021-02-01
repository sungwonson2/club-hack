import React from 'react';
import {Text, View, Button} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

export const PersonScreen = ({ navigation, route }) => {
    return (    
      <View style={ContainerStyles.container}>
      <Text style = {TextStyles.header}>David Chung</Text>
      <Text>David has been in Pythons squad lmao for 2 years</Text>
      <Button title = "Chat" onPress = {() => navigation.navigate('Chat')}/>
      <Text>View More</Text>
      <Button title = "Profile" onPress = {() => navigation.navigate('Profile')}/>
      </View>  
      );
  };
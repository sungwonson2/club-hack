import React from 'react';
import {Text, Button, ScrollView} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

export const ChatScreen = ({ navigation, route }) => {
    return (    
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style = {TextStyles.header}>Chat</Text>
      <Button title = "Person youre messaging" onPress = {() => navigation.navigate('Person')}/>
      <Button title = "More Messages" onPress = {() => navigation.navigate('Messaging')}/>
      </ScrollView>  
      );
  };
import React from 'react';
import {Text, ScrollView, TouchableOpacity, Image} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

export const MessagingScreen = ({ navigation, route }) => {
    return (    
      <ScrollView contentContainerStyle = {{flexGrow: 1, alignItems: 'center'}}>
      <Text style = {TextStyles.header}>Messaging</Text>
      <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat', {name: 'pantheraventuresswegmailcom'})}>
        <Text style = {TextStyles.messagePersonText}>Richard Cho</Text>
        <Text style = {TextStyles.messageText}>Richard Cho is ugly</Text>
      </TouchableOpacity>  
      <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat')}>
        <Text style = {TextStyles.messagePersonText}>Tyler Johnson</Text>
        <Text style = {TextStyles.messageText}>Want to go hiking on the 13th?</Text>
      </TouchableOpacity>    
      <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat')}>
        <Text style = {TextStyles.messagePersonText}>David Chung</Text>
        <Text style = {TextStyles.messageText}>Let's go grab some coffee next week!</Text>
      </TouchableOpacity>    
      <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat')}>
        <Text style = {TextStyles.messagePersonText}>Sungwon Son</Text>
        <Text style = {TextStyles.messageText}>skrt</Text>
      </TouchableOpacity>    
      <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat')}>
        <Text style = {TextStyles.messagePersonText}>Alpha Fund</Text>
        <Text style = {TextStyles.messageText}>Alpha Fund is having a fundraiser next week</Text>
      </TouchableOpacity>    
      <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat')}>
        <Text style = {TextStyles.messagePersonText}>Cornell Finance Club</Text>
        <Text style = {TextStyles.messageText}>Cornell finance club event today!</Text>
      </TouchableOpacity>    
      <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat')}>
        <Text style = {TextStyles.messagePersonText}>Alpha Fund</Text>
        <Text style = {TextStyles.messageText}>Alpha Fund is a bla bla bla</Text>
      </TouchableOpacity>    
      <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat')}>
        <Text style = {TextStyles.messagePersonText}>Alpha Fund</Text>
        <Text style = {TextStyles.messageText}>Alpha Fund is a bla bla bla</Text>
      </TouchableOpacity>    
      <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat')}>
        <Text style = {TextStyles.messagePersonText}>Alpha Fund</Text>
        <Text style = {TextStyles.messageText}>Alpha Fund is a bla bla bla</Text>
      </TouchableOpacity>      
      </ScrollView>  
      );
  };
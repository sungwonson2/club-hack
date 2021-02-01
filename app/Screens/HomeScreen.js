import React from 'react';
import {Text, ScrollView, TouchableOpacity} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

export const HomeScreen = ({ navigation, route }) => {
    return (    
      <ScrollView contentContainerStyle = {{flexGrow: 1, alignItems: 'center'}}>
      <Text style = {TextStyles.header}>Your Matched Clubs</Text>
      <TouchableOpacity style={ContainerStyles.club} onPress = {() => navigation.navigate('Club')}>
        <Text>Cornell Finance Club</Text>
        <Text>Cornell Finance Club is a bla bla bla</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={ContainerStyles.club} onPress = {() => navigation.navigate('Club')}>
        <Text>Cornell Finance Club</Text>
        <Text>Cornell Finance Club is a bla bla bla</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={ContainerStyles.club} onPress = {() => navigation.navigate('Club')}>
        <Text>Cornell Finance Club</Text>
        <Text>Cornell Finance Club is a bla bla bla</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={ContainerStyles.club} onPress = {() => navigation.navigate('Club')}>
        <Text>Cornell Finance Club</Text>
        <Text>Cornell Finance Club is a bla bla bla</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={ContainerStyles.club} onPress = {() => navigation.navigate('Club')}>
        <Text>Cornell Finance Club</Text>
        <Text>Cornell Finance Club is a bla bla bla</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={ContainerStyles.club} onPress = {() => navigation.navigate('Club')}>
        <Text>Cornell Finance Club</Text>
        <Text>Cornell Finance Club is a bla bla bla</Text> 
      </TouchableOpacity>
      </ScrollView>  
      );
  };
import React from 'react';
import {Text, View, Button, Image} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

export const ProfileScreen = ({ navigation, route }) => {
    return (    
      <View style={ContainerStyles.container}>
      <Text style = {TextStyles.header}>Profile</Text>
      <Image style = {{width: 150, height: 150}}source={require('../assets/testUserProfile1.jpg')}/>
      <Text style = {TextStyles.smallHeader}>Name</Text>
      <Text style = {TextStyles.normalText}>Tyler Johnson</Text>
      <Text style = {TextStyles.smallHeader}>email</Text>
      <Text style = {TextStyles.normalText}>tjohnson@gmail.com</Text>
      <Text style = {TextStyles.smallHeader}>School</Text>
      <Text style = {TextStyles.normalText}>University of California, Irvine</Text>
      <Text style = {TextStyles.smallHeader}>Clubs</Text>
      <Button title = "Engineering Club" onPress = {() => navigation.navigate('Club')}/>
      <Button title = "Settings" onPress = {() => navigation.navigate('Settings')}/>
      </View>  
      );
  };
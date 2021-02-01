import React from 'react';
import {Text, View, Button} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

export const MembersScreen = ({ navigation, route }) => {
  return (    
    <View style={ContainerStyles.container}>
    <Text style = {TextStyles.header}>Members</Text>
    <Button title = "Member1" onPress = {() => navigation.navigate('Person')}/>
    <Button title = "Member2" onPress = {() => navigation.navigate('Person')}/>
    </View>  
    );
};
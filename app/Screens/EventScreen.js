import React from 'react';
import {Text, View} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

export const EventScreen = ({ navigation, route }) => {
    return (    
      <View style={ContainerStyles.container}>
      <Text style = {TextStyles.header}>Event</Text>
      <Text style = {TextStyles.normalText}>Members</Text>
      <Text style = {TextStyles.normalText}>Date</Text>
      <Text style = {TextStyles.normalText}>{route.params.event.date}</Text>
      <Text style = {TextStyles.normalText}>Time</Text>
      <Text style = {TextStyles.normalText}>{route.params.event.hour.toString().concat(':')
        .concat(route.params.event.minute.toString())}</Text>
      <Text style = {TextStyles.normalText}>Activity</Text>
      <Text style = {TextStyles.normalText}>{route.params.event.activity}</Text>
      </View>  
      );
  };
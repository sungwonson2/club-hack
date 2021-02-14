import React from 'react';
import {Text, View} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

export const DayInfoScreen = ({ navigation, route }) => {
    return (    
      <View style={ContainerStyles.container}>
      <Text style = {TextStyles.header}>Day Info</Text>
      </View>  
      );
  };
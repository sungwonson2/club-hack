import React from 'react';
import {Text, View} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

export const ClubCreationScreen = ({ navigation, route }) => {
    return (    
      <View style={ContainerStyles.container}>
      <Text style = {TextStyles.header}>Club Creation</Text>
      </View>  
      );
  };
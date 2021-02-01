import React from 'react';
import {Text, ScrollView, TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';

import {ContainerStyles, TextStyles} from '../Styles.js'

export const DiscoverScreen = ({ navigation, route }) => {
    return (  
      <ScrollView contentContainerStyle = {{flexGrow: 1, alignItems: 'center'}}>
      {/* Need to change search bar */}
      <SearchBar     
      lightTheme
      containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
      placeholderTextColor={'#g5g5g5'}
      placeholder={'Type Here...'}/>
      <TouchableOpacity style={ContainerStyles.club} onPress = {() => navigation.navigate('Club')}>
        <Text>Alpha Fund</Text>
        <Text>Alpha Fund is a bla bla bla</Text>
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
  
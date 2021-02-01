import React from 'react';
import {Text, Button, ScrollView} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

export const ClubScreen = ({ navigation, route }) => {
    return (    
      <ScrollView contentContainerStyle = {{flexGrow: 1, alignItems: 'center'}}>
      <Text style = {TextStyles.header}>Alpha Fund</Text>
      <Text style = {TextStyles.smallHeader}>Catered Interests</Text>
      <Text style = {TextStyles.normalText}>Interests</Text>
      <Text style = {TextStyles.smallHeader}>Website</Text>
      <Text style = {TextStyles.normalText}>alphafund.com</Text>
      <Text style = {TextStyles.smallHeader}>Overview</Text>
      <Text style = {TextStyles.normalText}>sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf
      sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf
      sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf </Text>
      <Text style = {TextStyles.smallHeader}>Culture</Text>
      <Text style = {TextStyles.normalText}>sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf
      sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf
      sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf sdafvasfdsafvdsfvdsafvvdf </Text>
      <Text style = {TextStyles.smallHeader}>Similar Clubs</Text>
      <Button title = "Similar Club1" onPress = {() => navigation.navigate('Club')}/>
      <Button title = "Members" onPress = {() => navigation.navigate('Members')}/>
      <Button title = "Chat" onPress = {() => navigation.navigate('Chat')}/>
      </ScrollView>  
      );
  };
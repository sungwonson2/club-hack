import React, {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase, db} from '../FirebaseConfig'

export const ClubCreationScreen = ({ navigation, route }) => {
    const [name, setName] = useState('')
    const [interests, setInterests] = useState('')
    const [website, setWebsite] = useState('')
    const [overview, setOverview] = useState('')
    const [culture, setCulture] = useState('')

    const onCreateClubPress = () => {
      var dir = '/clubs/'.concat(name.toLocaleString());

      db.ref(dir).set({
        interests: interests.toLocaleString(),
        website: website.toLocaleString(),
        overview: overview.toLocaleString(),
        culture: culture.toLocaleString(),
      })

      var dir = (dir.concat('/members/')).concat(firebase.auth().currentUser.displayName)
      
      db.ref(dir).set({
        name: firebase.auth().currentUser.displayName,
        admin: true,
        member: true
      })

      var dir = 'users/'.concat(firebase.auth().currentUser.displayName).concat('/clubs/').concat(name)

      db.ref(dir).set({
        name: name,
        admin: true,
        member: true
      })

      navigation.navigate('Club', {name: name})
    }

    return (    
      <View style={ContainerStyles.container}>
      <Text style = {TextStyles.header}>Club Creation</Text>
      <Text>Name</Text>
      <TextInput 
        style = {ContainerStyles.input}
        placeholder='Name'
        onChangeText={(text) => setName(text)}
        value = {name}/>
      <Text>Catered Interests</Text>
      <TextInput 
        style = {ContainerStyles.input}
        placeholder='Interests'
        onChangeText={(text) => setInterests(text)}
        value = {interests}/>
      <Text>Website</Text>
      <TextInput 
        style = {ContainerStyles.input}
        placeholder='Website'
        onChangeText={(text) => setWebsite(text)}
        value = {website}/>
      <Text>Overview</Text>
      <TextInput 
        style = {ContainerStyles.input}
        placeholder='Overview'
        onChangeText={(text) => setOverview(text)}
        value = {overview}/>
      <Text>Culture</Text>
      <TextInput 
        style = {ContainerStyles.input}
        placeholder='Culture'
        onChangeText={(text) => setCulture(text)}
        value = {culture}/>
      <Button title = "Create Club!" onPress = {() => onCreateClubPress()}></Button>
      </View>
      );
  };
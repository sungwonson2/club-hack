import React, {useEffect, useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase} from '../FirebaseConfig'

export const SignupStudentScreen = ({ navigation, route }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [interest, setInterest] = useState('')
    const [funFact, setFunFact] = useState('')

    // const profileRef = firebase.firestore().collection('profiles')

    const onRegisterPress = () => {
      // if (password !== confirmPassword) {
      //   alert("Passwords don't match.")
      //   return
      // }
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const data = {
                id: uid,
                email,
                fullName,
            };
            const usersRef = firebase.firestore().collection('users')
            usersRef
              .doc(uid)
              .set(data)
              .then(() => {
                navigation.navigate('Home')
                  // navigation.navigate('Home', {user: data})
              })
          .catch((error) => {
              alert(error)
          });
        })
        .catch((error) => {
            alert(error)
      });
    }

    return (    
      <View style={ContainerStyles.container}>
      <Text style = {TextStyles.header}>Sign up as a student!</Text>
      <Text>Name</Text>
      <TextInput 
        style = {ContainerStyles.input}
        placeholder='Name'
        onChangeText={(text) => setName(text)}
        value = {name}/>
      <Text>Email</Text>
      <TextInput 
        style = {ContainerStyles.input}
        placeholder='Email'
        onChangeText={(text) => setEmail(text)}
        value = {email}/>      
      <Text>Password</Text>
      <TextInput 
        style = {ContainerStyles.input}
        placeholder='Password'
        onChangeText={(text) => setPassword(text)}
        value = {password}/>    
      <Text>Interest</Text>
      <TextInput 
        style = {ContainerStyles.input}
        placeholder='Interest'
        onChangeText={(text) => setInterest(text)}
        value = {interest}/>
      <Text>Fun Fact</Text>
      <TextInput 
        style = {ContainerStyles.input}
        placeholder='Fun Fact'
        onChangeText={(text) => setFunFact(text)}
        value = {funFact}/>
      <Text>Social Preference</Text>
      <TextInput style = {ContainerStyles.input}>Social Preference</TextInput>
      <Button title = "Submit" onPress = {() => onRegisterPress()}></Button>
      </View>  
      );
  };
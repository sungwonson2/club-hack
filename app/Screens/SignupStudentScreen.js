import React, {useEffect, useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase, db} from '../FirebaseConfig'

export const SignupStudentScreen = ({ navigation, route }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [school, setSchool] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [interest, setInterest] = useState('')
    const [funFact, setFunFact] = useState('')

    const onRegisterPress = () => {
      if (password !== confirmPassword) {
        alert("Passwords don't match.")
        return
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            var key = email.replace(/[^a-zA-Z0-9 ]/g, "")

            var dir = '/users/'.concat(key);

            firebase.auth().currentUser.updateProfile({
              displayName: key
            })

            db.ref(dir).set({
              name: name,
              email: email,
              school: school,
              interests: "",
              funFact: "",
              socialPreference: "",
            })

            navigation.navigate('Home')
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
      <Text>School</Text>
      <TextInput 
        style = {ContainerStyles.input}
        placeholder='School'
        onChangeText={(text) => setSchool(text)}
        value = {school}/>           
      <Text>Password</Text>
      <TextInput 
        style = {ContainerStyles.input}
        secureTextEntry={true}
        placeholder='Password'
        onChangeText={(text) => setPassword(text)}
        value = {password}/>    
      <Text>Confirm Password</Text>
      <TextInput 
        style = {ContainerStyles.input}
        secureTextEntry={true}
        placeholder='Confirm Password'
        onChangeText={(text) => setConfirmPassword(text)}
        value = {confirmPassword}/>    
      {/* <Text>Interest</Text>
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
      <TextInput style = {ContainerStyles.input}>Social Preference</TextInput> */}
      <Button title = "Submit" onPress = {() => onRegisterPress()}></Button>
      </View>  
      );
  };
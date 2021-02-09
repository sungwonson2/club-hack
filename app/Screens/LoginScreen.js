import React, {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase} from '../FirebaseConfig'

export const LoginScreen = ({ navigation, route }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

    const onLoginPress = () => {
      firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((response) => {
              navigation.navigate('Home')

              // const uid = response.user.uid
              // const usersRef = firebase.firestore().collection('users')
              // usersRef
              //     .doc(uid)
              //     .get()
              //     .then(firestoreDocument => {
              //         if (!firestoreDocument.exists) {
              //             alert("User does not exist anymore.")
              //             return;
              //         }
              //         const user = firestoreDocument.data()
              //         navigation.navigate('Home', {user})
              //     })
              //     .catch(error => {
              //         alert(error)
              //     });
          })
          .catch(error => {
              alert(error)
          })
    }
    return (    
      <View style={ContainerStyles.container}>
      <Text style = {TextStyles.header}>Login!</Text>
      <TextInput 
        style = {ContainerStyles.input}
        placeholder='Email'
        onChangeText={(text) => setEmail(text)}
        value = {email}/>      
      <TextInput 
        style = {ContainerStyles.input}
        placeholder='Password'
        onChangeText={(text) => setPassword(text)}
        value = {password}/>    
      <Button title = "Login" onPress = {() => onLoginPress()}></Button>
      <Button title = "Forgot Password?" onPress = {() => navigation.navigate('ForgotPassword')}></Button>
      </View>  
      );
  };
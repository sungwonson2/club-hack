import React, {useState, Component} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase, db} from '../FirebaseConfig'

export class ProfileChangeScreen extends Component {
    constructor(props){
      super(props);
      this.state={name: "", email: "", school: "", interests: "", funFact: "", socialPreference: ""}
      this.connected = "Connect" 
    //   const [name, setName] = useState('')
    //   const [email, setEmail] = useState('')
    //   const [school, setSchool] = useState('')
    //   const [interests, setInterests] = useState('')
    //   const [funFact, setFunFact] = useState('')
    //   const [socialPreference, setSocialPreference] = useState('')
    }
    
  
    componentDidMount(){
        var dir = 'users/'.concat(firebase.auth().currentUser.displayName)
        db.ref(dir).on('value', (snapshot) =>{
          this.setState({name: snapshot.val().name})
          this.setState({email: snapshot.val().email})
          this.setState({school: snapshot.val().school})
          this.setState({interests: snapshot.val().interests})
          this.setState({funFact: snapshot.val().funFact})
          this.setState({socialPreference: snapshot.val().socialPreference})
        })
      var search = 'users/'.concat(firebase.auth().currentUser.displayName).concat('/clubs');
    }

    onChangeProfilePress(){
        var dir = 'users/'.concat(firebase.auth().currentUser.displayName)
        db.ref(dir).set({
          name: this.state.name,
          email: this.state.email,
          school: this.state.school,
          interests: this.state.interests,
          funFact: this.state.funFact,
          socialPreference: this.state.socialPreference,
        })
    }
  
    render(){
      return(
        <View style={ContainerStyles.container}>
        <Text style = {TextStyles.header}>Edit Profile</Text>
        <Text>Name</Text>
        <TextInput 
          style = {ContainerStyles.input}
          placeholder='Name'
          onChangeText={(text) => setState({name: text})}
          value = {this.state.name}/>
        <Text>Email</Text>
        <TextInput 
          style = {ContainerStyles.input}
          placeholder='Email'
          onChangeText={(text) => setState({email: text})}
          value = {this.state.email}/>
        <Text>School</Text>
        <TextInput 
          style = {ContainerStyles.input}
          placeholder='School'
          onChangeText={(text) => setState({school: text})}
          value = {this.state.school}/>
        <Text>Interests</Text>
        <TextInput 
          style = {ContainerStyles.input}
          placeholder='Interests'
          onChangeText={(text) => setState({interests: text})}
          value = {this.state.interests}/>
        <Text>Fun Fact</Text>
        <TextInput 
          style = {ContainerStyles.input}
          placeholder='Fun Fact'
          onChangeText={(text) => setState({funFact: text})}
          value = {this.state.funFact}/>
        <Text>Social Preference</Text>
        <TextInput 
          style = {ContainerStyles.input}
          placeholder='socialPreference'
          onChangeText={(text) => setState({socialPreference: text})}
          value = {this.state.socialPreference}/>
        <Button title = "Edit Profile!" onPress = {() => onChangeProfilePress()}></Button>
        </View>
      )}
  }
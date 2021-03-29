import React, {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase, db} from '../FirebaseConfig'

export class ClubScreen extends Component {
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
          var Profile = {
              name: snapshot.val().name,
              email: snapshot.val().email,
              school: snapshot.val().school,
              // clubs: snapshot.val().clubs,
              interests: snapshot.val().interests,
              funFact: snapshot.val().funFact,
              socialPreference: snapshot.val().socialPreference
            }
          this.setState({profile: Profile})
      })
  
      var search = 'users/'.concat(firebase.auth().currentUser.displayName).concat('/clubs');
    }

    onChangeProfilePress(){
        var search = 'users/'
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
          value = {name}/>
        <Text>Email</Text>
        <TextInput 
          style = {ContainerStyles.input}
          placeholder='Email'
          onChangeText={(text) => setState({email: text})}
          value = {email}/>
        <TextInput 
          style = {ContainerStyles.input}
          placeholder='School'
          onChangeText={(text) => setState({school: text})}
          value = {school}/>
        <TextInput 
          style = {ContainerStyles.input}
          placeholder='Interests'
          onChangeText={(text) => setState({interests: text})}
          value = {interests}/>
        <TextInput 
          style = {ContainerStyles.input}
          placeholder='Fun Fact'
          onChangeText={(text) => setState({funFact: text})}
          value = {funFact}/>
        <TextInput 
          style = {ContainerStyles.input}
          placeholder='socialPreference'
          onChangeText={(text) => setState({socialPreference: text})}
          value = {socialPreference}/>
        <Button title = "Edit Profile!" onPress = {() => onChangeProfilePress()}></Button>
        </View>
      )}
  }
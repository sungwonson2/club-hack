import React, {useState, Component} from 'react';
import {Text, View, ScrollView, Button, TextInput} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase, db} from '../FirebaseConfig'

import DropDownPicker from 'react-native-dropdown-picker';

export class ProfileChangeScreen extends Component {
    constructor(props){
      super(props);
      this.state={name: "", email: "", school: "", interests: "", funFact: "", socialPreference: ""}
      this.connected = "Connect" 
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
        db.ref(dir).update({
          name: this.state.name,
          email: this.state.email,
          school: this.state.school,
          interests: this.state.interests,
          funFact: this.state.funFact,
          socialPreference: this.state.socialPreference,
        })
        alert("Updated Profile!")
    }
  
    render(){
      return(
        <ScrollView contentContainerStyle={ContainerStyles.container}>
        <Text style = {TextStyles.header}>Edit Profile</Text>
        <Text>Name</Text>
        <TextInput 
          style = {ContainerStyles.input}
          placeholder='Name'
          onChangeText={(text) => this.setState({name: text})}
          value = {this.state.name}/>
        <Text>Email</Text>
        <TextInput 
          style = {ContainerStyles.input}
          placeholder='Email'
          onChangeText={(text) => this.setState({email: text})}
          value = {this.state.email}/>
        <Text>School</Text>
        <TextInput 
          style = {ContainerStyles.input}
          placeholder='School'
          onChangeText={(text) => this.setState({school: text})}
          value = {this.state.school}/>
        <Text>Interests</Text>
        <TextInput 
          style = {ContainerStyles.input}
          placeholder='Interests'
          onChangeText={(text) => this.setState({interests: text})}
          value = {this.state.interests}/>
        <Text>Fun Fact</Text>
        <TextInput 
          style = {ContainerStyles.input}
          placeholder='Fun Fact'
          onChangeText={(text) => this.setState({funFact: text})}
          value = {this.state.funFact}/>
        <Text>Social Preference</Text>
        <DropDownPicker
          items = {[
            {label: '', value: ''},
            {label: 'Online', value: 'Online'},
            {label: 'In-Person', value: 'In-Person'},
          ]}
          defaultValue={this.state.socialPreference}
          containerStyle={{height: 40, width: "80%"}}
          itemStyle={{
            justifyContent: 'flex-start'
          }}
          onChangeItem={(item) => this.setState({socialPreference: item.label}
            )}
        />
        <Button title = "Edit Profile!" onPress = {() => this.onChangeProfilePress()}></Button>
        </ScrollView>
      )}
  }
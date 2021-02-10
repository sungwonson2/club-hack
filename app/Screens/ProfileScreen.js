import React, {Component} from 'react';
import {Text, View, Button, Image, ScrollView} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase, db} from '../FirebaseConfig'

export class ProfileScreen extends Component {
  constructor(props){
    super(props);
    this.state={profile: []} 
    this.user = firebase.auth().currentUser;
  }
  

  componentDidMount(){
    var search = 'users/'.concat(firebase.auth().currentUser.displayName)
    db.ref(search).on('value', (snapshot) =>{
      var Profile = {
          name: snapshot.val().name,
          email: snapshot.val().email,
          school: snapshot.val().school,
          clubs: snapshot.val().clubs,
          interests: snapshot.val().interests,
          funFact: snapshot.val().funFact,
          socialPreference: snapshot.val().socialPreference
        }
      this.setState({profile: Profile})
    })
  }

  render(){
    return (    
      <ScrollView contentContainerStyle={{ paddingBottom: 1000, alignItems: 'center'}}>
        <Text style = {TextStyles.header}>Profile</Text>
        <Image style = {{width: 150, height: 150}}source={require('../assets/testUserProfile1.jpg')}/>
        <Text style = {TextStyles.smallHeader}>Name</Text>
        <Text style = {TextStyles.normalText}>{this.state.profile.name}</Text>
        <Text style = {TextStyles.smallHeader}>Email</Text>
        <Text style = {TextStyles.normalText}>{this.state.profile.email}</Text>
        <Text style = {TextStyles.smallHeader}>School</Text>
        <Text style = {TextStyles.normalText}>{this.state.profile.school}</Text>
        <Text style = {TextStyles.smallHeader}>Interests</Text>
        <Text style = {TextStyles.normalText}>{this.state.profile.interests}</Text>
        <Text style = {TextStyles.smallHeader}>Fun Fact</Text>
        <Text style = {TextStyles.normalText}>{this.state.profile.funFact}</Text>
        <Text style = {TextStyles.smallHeader}>Social Preference</Text>
        <Text style = {TextStyles.normalText}>{this.state.profile.socialPreference}</Text>
        <Text style = {TextStyles.smallHeader}>Clubs</Text>
        <Text style = {TextStyles.normalText}>{this.state.profile.clubs}</Text>
        {/* <Button title = "Engineering Club" onPress = {() => navigation.navigate('Club')}/> */}
        <Button title = "Settings" onPress = {() => this.props.navigation.navigate('Settings')}/>
      </ScrollView>  
      );
  }
}
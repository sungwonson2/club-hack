import React, {Component} from 'react';
import {Text, View, Button, Image, ScrollView, FlatList} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase, db} from '../FirebaseConfig'

export class PersonScreen extends Component {
  constructor(props){
    super(props);
    this.state={profile: []} 
    this.user = firebase.auth().currentUser;
  }
  

  componentDidMount(){
    var dir = 'users/'.concat(this.props.route.params.name)
    db.ref(dir).on('value', (snapshot) =>{
      var Profile = {
          name: snapshot.val().name,
          email: snapshot.val().email,
          school: snapshot.val().school,
          interests: snapshot.val().interests,
          funFact: snapshot.val().funFact,
          socialPreference: snapshot.val().socialPreference
        }
      this.setState({profile: Profile})})

    var dir = dir.concat('/clubs')
    db.ref(dir).on('value', (snapshot) =>{
      var li = []
      snapshot.forEach((child)=>{
        li.push({
          key: child.key,
        })
      })
      this.setState({clubs:li})
    })
  }

  render(){
    return (    
      <View style = {ContainerStyles.container}>
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
        <FlatList 
          contentContainerStyle={{ paddingBottom: 1000}}
          data={this.state.clubs}
          keyExtractor={(item)=>item.key}
          renderItem={({item})=>{
            return(
                <Button title = {item.key} style={ContainerStyles.club} onPress = {() => this.props.navigation.navigate('Club', {name: item.key})}/>
            )}}/>
        <Button title = "Chat" onPress = {() => this.props.navigation.navigate('Chat', {name: this.props.route.params.name})}/>
        <Button title = "Schedule" onPress = {() => this.props.navigation.navigate('Schedule')}/>
      </View>  
      );
  }
}
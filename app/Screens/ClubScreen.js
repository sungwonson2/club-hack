import React, {Component} from 'react';
import {Text, Button, ScrollView, View} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase, db} from '../FirebaseConfig'

export class ClubScreen extends Component {
  constructor(props){
    super(props);
    this.state={club: []} 
  }
  

  componentDidMount(){
    var search = 'clubs/'.concat(this.props.route.params.name)
    db.ref(search).on('value', (snapshot) =>{
      var Club = {
          key: snapshot.key,
          culture: snapshot.val().culture,
          interests: snapshot.val().interests,
          overview: snapshot.val().overview,
          website: snapshot.val().website,
        }
      this.setState({club: Club})
    })
  }

  connect() {
    var dir = ('users/'.concat(firebase.auth().currentUser.displayName)).concat('/clubs')

    db.ref(dir).push(this.state.club.key)
  }

  render(){
    return(
      <View style={{flex:1, alignSelf:'center', justifyContent:'center'}}>
          <Text style = {TextStyles.header}> {this.state.club.key} </Text>
          <Text style = {TextStyles.smallHeader}>Catered Interests</Text>
          <Text style = {TextStyles.normalText}> {this.state.club.interests} </Text>
          <Text style = {TextStyles.smallHeader}>Website</Text>
          <Text style = {TextStyles.normalText}> {this.state.club.website} </Text>
          <Text style = {TextStyles.smallHeader}>Overview</Text>
          <Text style = {TextStyles.normalText}> {this.state.club.overview} </Text>
          <Text style = {TextStyles.smallHeader}>Culture</Text>
          <Text style = {TextStyles.normalText}> {this.state.club.culture} </Text>
          <Text style = {TextStyles.smallHeader}>Similar Clubs</Text>
          <Button title = "Connect" onPress = {() => this.connect()}/>
          <Button title = "Similar Club1" onPress = {() => this.props.navigation.navigate('Club')}/>
          <Button title = "Members" onPress = {() => this.props.navigation.navigate('Members')}/>
          <Button title = "Chat" onPress = {() => this.props.navigation.navigate('Chat')}/>
      </View>
    )}
}


import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase, db} from '../FirebaseConfig'

export class EventScreen extends Component {
  constructor(props){
    super(props);
    this.state={ event:[]} 
  }
  
  componentDidMount(){
    var dir = '/users/'.concat(firebase.auth().currentUser.displayName).concat('/schedule/').concat(this.props.route.params.event)
    db.ref(dir).once('value', (snapshot) =>{
      var Event = {
        date: snapshot.val().date,
        time: snapshot.val().hour.toString().concat(':').concat(snapshot.val().minute.toString()),
        activity: snapshot.val().activity,
        participants: snapshot.val().participants
      }
      this.setState({event :Event})
    })
  }

  delete() {
    this._isMounted = false;
    var dir = '/users/'.concat(firebase.auth().currentUser.displayName).concat('/schedule/').concat(this.props.route.params.event)
    db.ref(dir).remove()

    dir = '/users/'.concat(this.state.event.participants).concat('/schedule/').concat(this.props.route.params.event)
    db.ref(dir).remove()
    this.props.navigation.goBack();
  }

  render(){
    return(
      <View style={ContainerStyles.container}>
      <Text style = {TextStyles.header}>Event</Text>
      <Text style = {TextStyles.normalText}>Date</Text>
      <Text style = {TextStyles.normalText}>{this.state.event.date}</Text>
      <Text style = {TextStyles.normalText}>Time</Text>
      <Text style = {TextStyles.normalText}>{this.state.event.time}</Text>
      <Text style = {TextStyles.normalText}>Activity</Text>
      <Text style = {TextStyles.normalText}>{this.state.event.activity}</Text>
      <Text style = {TextStyles.normalText}>Members</Text>
      <Text style = {TextStyles.normalText}>{this.state.event.participants}</Text>
      <Button title = "Delete Event" onPress = {() => this.delete()}/>
      </View>  
    )}
}
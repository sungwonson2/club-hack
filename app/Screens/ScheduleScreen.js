import React, {Component} from 'react';
import {Text, View} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {Calendar} from 'react-native-calendars';

import {firebase, db} from '../FirebaseConfig'

const video = {key:'video', color: 'red'};
const coffee = {key:'coffee', color: 'blue'};
const hiking = {key:'hiking', color: 'green'};
const lunch = {key:'lunch', color: 'yellow'};

export class ScheduleScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      dates: {}
    };
  }

  componentDidMount() {
    var dir = '/users/'.concat(firebase.auth().currentUser.displayName).concat('/schedule/')
    db.ref(dir).on('value', (snapshot) =>{
      var li = {}
      snapshot.forEach((child)=>{
        if (child.val().activity == 'video') {
          if (child.val().date in li) {
            li[child.val().date]['dots'].push(video)
          }
          else {
            li[child.val().date] = {dots: [video]};
          }
        }
        else if (child.val().activity == 'coffee') {
          if (child.val().date in li) {
            li[child.val().date]['dots'].push(coffee)
          }
          else {
            li[child.val().date] = {dots: [coffee]};
          }
        }
        else if (child.val().activity == 'hiking') {
          if (child.val().date in li) {
            li[child.val().date]['dots'].push(hiking)
          }
          else {
            li[child.val().date] = {dots: [hiking]};
          }
        }
        else if (child.val().activity == 'lunch') {
          if (child.val().date in li) {
            li[child.val().date]['dots'].push(lunch)
          }
          else {
            li[child.val().date] = {dots: [lunch]};
          }
        }
      })
    this.setState({dates:li})
    })
  }

  render() {
    return (    
      <View style={ContainerStyles.container}>
      <Text style = {TextStyles.header}>Schedule</Text>
      <Calendar
        current={'2021-02-12'}
        minDate={'2020-12-01'}
        maxDate={'2024-12-30'}
        onDayPress={(day) => this.props.navigation.navigate('DayInfo', {day: day})}
        onDayLongPress={(day) => this.props.navigation.navigate('Scheduling', {day: day})}
        markedDates = {this.state.dates}
        markingType={'multi-dot'}
      />
      </View>  
      );
  }
}
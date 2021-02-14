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
      />
      </View>  
      );
  }
}
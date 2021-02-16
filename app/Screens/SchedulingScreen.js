import React, {useState} from 'react';
import {Text, View, Button, TextInput} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

import DateTimePicker from '@react-native-community/datetimepicker'
import DropDownPicker from 'react-native-dropdown-picker';

import {firebase, db} from '../FirebaseConfig'

export const SchedulingScreen = ({navigation, route}) => {
  const [date, setDate] = useState(new Date(1598051730000))
  const [activity, setActivity] = useState('')
  const [username, setUsername] = useState('')

  const onAddToSchedulePress = (event, selectedDate) => {
    var event = {
      date: route.params.day.dateString,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      activity: activity,
      participants: username
    }

    var dir = '/users/'.concat(firebase.auth().currentUser.displayName).concat('/schedule/');
    db.ref(dir).push({
      date: route.params.day.dateString,
      day: date.getDate(),
      hour: date.getHours(),
      minute: date.getMinutes(),
      activity: activity,
      participants: username
    })  
    .then((snap) => {
      const key = snap.key
      var dir = '/users/'.concat(username).concat('/schedule/').concat(key);
      db.ref(dir).set({
        date: route.params.day.dateString,
        day: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        activity: activity,
        participants: firebase.auth().currentUser.displayName
      })
  
      alert("Event Created")
      navigation.replace('Event', {event: key})
    })
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <View>
      <Text style = {TextStyles.header}>Scheduling</Text>
      <Text style = {TextStyles.normalText}>{route.params.day.dateString}</Text>
      <Text style = {TextStyles.normalText}>Time</Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode={'time'}
        is24Hour={true}
        display="default"
        onChange={onChange}
      />

      <Text style = {TextStyles.normalText}>Activity</Text>
      <DropDownPicker
        items = {[
          {label: 'Video Chat', value: 'video'},
          {label: 'Coffee', value: 'coffee'},
          {label: 'Hiking', value: 'hiking'},
          {label: 'Lunch', value: 'lunch'},
        ]}
        defaultValue={'video'}
        containerStyle={{height: 40}}
        itemStyle={{
          justifyContent: 'flex-start'
        }}
        onChangeItem={item => {
          setActivity(item.value);
        }}
      />

      <Text style = {TextStyles.normalText}>Other Event Participants</Text>
      <TextInput 
        style = {ContainerStyles.input}
        placeholder='Username'
        onChangeText={(text) => setUsername(text)}
        value = {username}/>

      <Button title = "Add to Schedule!" onPress = {() => onAddToSchedulePress()}></Button>
    </View>
  );
};
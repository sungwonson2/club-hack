import React, {Component} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase, db} from '../FirebaseConfig'

export class DayInfoScreen extends Component {
  constructor(props){
    super(props);
    this.state={ list:[],} 
  }
  
  componentDidMount(){
    var dir = '/users/'.concat(firebase.auth().currentUser.displayName).concat('/schedule/')
    db.ref(dir).once('value', (snapshot) =>{
      var li = []
      snapshot.forEach((child)=>{
        if (child.val().date == this.props.route.params.day.dateString) {
          li.push({
            key: child.key,
            date: child.val().date,
            activity: child.val().activity,
            participants: child.val().participants
          })
        }
      })
    this.setState({list :li})
})

  }
  render(){
    return(
      <View style={{flex: 1}}>
        <Text style = {TextStyles.header}>{this.props.route.params.day.dateString}</Text>
        <FlatList 
          contentContainerStyle={{ paddingBottom: 1000}}
          data={this.state.list}
          keyExtractor={(item)=>item.key}
          renderItem={({item})=>{
          return(
              <TouchableOpacity style={ContainerStyles.club} onPress = {() => this.props.navigation.navigate('Event', {event: item.key})}>
                <Text>{item.date}</Text>
                <Text>{item.activity}</Text>
                <Text>{item.participants}</Text>
              </TouchableOpacity>)
          }}/>
      </View>
    )}
   }
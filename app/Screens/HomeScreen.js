import React, {Component} from 'react';
import {Text, ScrollView, TouchableOpacity, View, FlatList} from 'react-native';
import {SearchBar, } from 'react-native-elements';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase, db} from '../FirebaseConfig'

export class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state={ list:[],} 
  }
  
  componentDidMount(){
    var search = ('users/'.concat(firebase.auth().currentUser.displayName)).concat('/clubs')
    db.ref(search).on('value', (snapshot) =>{
      var li = []
      snapshot.forEach((child)=>{
        li.push({
          key: child.key,
          name: child.val().name,
        })
      })
    this.setState({list:li})
  })

  }
  render(){
    return(
      <View style={{flex: 1}}>
        <Text style = {TextStyles.header}>Home</Text>
        <FlatList 
          contentContainerStyle={{ paddingBottom: 100}}
            data={this.state.list}
            keyExtractor={(item)=>item.key}
            renderItem={({item})=>{
              return(
                  <TouchableOpacity style={ContainerStyles.club} onPress = {() => this.props.navigation.navigate('Club', {name: item.name})}>
                    <Text>{item.name}</Text>
                  </TouchableOpacity>)
            }}/>
      </View>
    )}
   }
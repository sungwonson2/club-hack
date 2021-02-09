import React, {Component} from 'react';
import {Text, ScrollView, TouchableOpacity, View, FlatList} from 'react-native';
import {SearchBar, } from 'react-native-elements';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase, db} from '../FirebaseConfig'

export class DiscoverScreen extends Component {
  constructor(props){
    super(props);
    this.state={ list:[],} 
  }
  
  componentDidMount(){
    db.ref('clubs').on('value', (snapshot) =>{
      var li = []
      snapshot.forEach((child)=>{
        li.push({
          key: child.key,
          overview: child.val().overview,
        })
      })
    this.setState({list:li})
  })

  }
  render(){
    return(
      <View style={{flex: 1}}>
        <FlatList 
          contentContainerStyle={{ paddingBottom: 1000}}
            data={this.state.list}
            keyExtractor={(item)=>item.key}
            renderItem={({item})=>{
              return(
                  <TouchableOpacity style={ContainerStyles.club} onPress = {() => this.props.navigation.navigate('Club', {name: item.key})}>
                    <Text>{item.key}</Text>
                    <Text>{item.overview}</Text>
                  </TouchableOpacity>)
            }}/>
      </View>
    )}
   }
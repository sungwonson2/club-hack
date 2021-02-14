import React, {Component} from 'react';
import {Text, View, Button, FlatList, TouchableOpacity} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase, db} from '../FirebaseConfig'

export class MembersScreen extends Component {
  constructor(props){
    super(props);
    this.state={members: []}
  }
  

  componentDidMount(){
    var dir = 'clubs/'.concat(this.props.route.params.club).concat('/members')
    db.ref(dir).on('value', (snapshot) =>{
      var li = []
      snapshot.forEach((child)=>{
        li.push({
          key: child.key,
        })
      })
    this.setState({members:li})
    })
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <Text style = {TextStyles.header}>Members</Text>
        <FlatList 
          contentContainerStyle={{ paddingBottom: 1000}}
            data={this.state.members}
            keyExtractor={(item)=>item.key}
            renderItem={({item})=>{
              return(
                  <TouchableOpacity style={ContainerStyles.club} onPress = {() => this.props.navigation.replace('Person', {name: item.key})}>
                    <Text>{item.key}</Text>
                  </TouchableOpacity>)
            }}/>
      </View>
    )}
}

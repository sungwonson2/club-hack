import React, {Component} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase, db} from '../FirebaseConfig'
import { PickerIOSItem } from 'react-native';

export class MessagingScreen extends Component {
  constructor(props){
    super(props);
    this.state={ conversations:[],} 
  }
  
  componentDidMount(){
    var search = 'users/'.concat(firebase.auth().currentUser.displayName).concat('/conversations')
    db.ref(search).on('value', (snapshot) =>{
      var li = []
      snapshot.forEach((child)=>{
        li.push({
          name: child.key,
        })
      })
    this.setState({conversations:li})
  })

  }
  render(){
    return(
      <View style={{flex: 1}}>
        <Text style = {TextStyles.header}>Messages</Text>
        <FlatList 
          contentContainerStyle={{ paddingBottom: 1000}}
            data={this.state.conversations}
            keyExtractor={(item)=>item.name}
            renderItem={({item})=>{
              return(
                  <TouchableOpacity style={ContainerStyles.messages} onPress = {() => this.props.navigation.navigate('Chat', {name: item.name})}>
                    <Text>{item.name}</Text>
                  </TouchableOpacity>)
            }}/>
      </View>
    )}
   }

// export const MessagingScreen = ({ navigation, route }) => {
//     return (    
//       <ScrollView contentContainerStyle = {{flexGrow: 1, alignItems: 'center'}}>
//       <Text style = {TextStyles.header}>Messaging</Text>
//       <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat', {name: 'sungwonson2gmailcom'})}>
//         <Text style = {TextStyles.messagePersonText}>Richard Cho</Text>
//         <Text style = {TextStyles.messageText}>Richard Cho is ugly</Text>
//       </TouchableOpacity>  
//       <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat')}>
//         <Text style = {TextStyles.messagePersonText}>Tyler Johnson</Text>
//         <Text style = {TextStyles.messageText}>Want to go hiking on the 13th?</Text>
//       </TouchableOpacity>    
//       <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat')}>
//         <Text style = {TextStyles.messagePersonText}>David Chung</Text>
//         <Text style = {TextStyles.messageText}>Let's go grab some coffee next week!</Text>
//       </TouchableOpacity>    
//       <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat')}>
//         <Text style = {TextStyles.messagePersonText}>Sungwon Son</Text>
//         <Text style = {TextStyles.messageText}>skrt</Text>
//       </TouchableOpacity>    
//       <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat')}>
//         <Text style = {TextStyles.messagePersonText}>Alpha Fund</Text>
//         <Text style = {TextStyles.messageText}>Alpha Fund is having a fundraiser next week</Text>
//       </TouchableOpacity>    
//       <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat')}>
//         <Text style = {TextStyles.messagePersonText}>Cornell Finance Club</Text>
//         <Text style = {TextStyles.messageText}>Cornell finance club event today!</Text>
//       </TouchableOpacity>    
//       <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat')}>
//         <Text style = {TextStyles.messagePersonText}>Alpha Fund</Text>
//         <Text style = {TextStyles.messageText}>Alpha Fund is a bla bla bla</Text>
//       </TouchableOpacity>    
//       <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat')}>
//         <Text style = {TextStyles.messagePersonText}>Alpha Fund</Text>
//         <Text style = {TextStyles.messageText}>Alpha Fund is a bla bla bla</Text>
//       </TouchableOpacity>    
//       <TouchableOpacity style={ContainerStyles.messages} onPress = {() => navigation.navigate('Chat')}>
//         <Text style = {TextStyles.messagePersonText}>Alpha Fund</Text>
//         <Text style = {TextStyles.messageText}>Alpha Fund is a bla bla bla</Text>
//       </TouchableOpacity>      
//       </ScrollView>  
//       );
//   };
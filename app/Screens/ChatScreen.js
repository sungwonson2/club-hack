import React, {Component} from 'react';
import {Text, Button, ScrollView} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase, db} from '../FirebaseConfig'
import firebaseSvc from '../FirebaseConfig'

export class ChatScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      messages: []
    };
  }

  get user() {
    return {
      displayName: this.props.route.params.name,
      id: firebase.auth().currentUser.uid,
      _id: firebase.auth().currentUser.uid,
    };
  }



  // user() {
  //   return {
  //     displayName: this.props.route.params.name,
  //     id: firebase.auth().currentUser.uid,
  //     _id: firebase.auth().currentUser.uid,
  //   };
  // }

  componentDidMount() {
    firebaseSvc.refOn(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    firebaseSvc.refOff();
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={firebaseSvc.send}
        user={this.user}
      />
    );
  }
}
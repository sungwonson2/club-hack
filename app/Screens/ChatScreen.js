import React, {Component} from 'react';
import {Text, Button, ScrollView} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

import {ContainerStyles, TextStyles} from '../Styles.js'

import {firebase, db} from '../FirebaseConfig'

// constructor(props){
//   super(props);
//   this.state = {
//     messages: []
//   };
// }

// get user() {
//   return {
//     displayName: this.props.route.params.name,
//     id: firebase.auth().currentUser.uid,
//     _id: firebase.auth().currentUser.uid,
//   };
// }

// componentDidMount() {
//   firebaseSvc.refOn(message =>
//     this.setState(previousState => ({
//       messages: GiftedChat.append(previousState.messages, message),
//     }))
//   );
// }
// componentWillUnmount() {
//   firebaseSvc.refOff();
// }

//onSend={firebaseSvc.send}

//FIREBASE

// class FirebaseSvc {
//   constructor() {
//     if (!firebase.apps.length) {
//       firebase.initializeApp(config);
//     } else {
//       console.log("firebase apps already running...")
//     }
//   }

//   get ref() {
//     return firebase.database().ref('Messages');
//   }

//   parse = snapshot => {
//     const { timestamp: numberStamp, text, user } = snapshot.val();
//     const { key: id } = snapshot;
//     const { key: _id } = snapshot; //needed for giftedchat
//     const timestamp = new Date(numberStamp);

//     const message = {
//       id,
//       _id,
//       timestamp,
//       text,
//       user,
//     };
//     return message;
//   };

//   refOn = callback => {
//     this.ref
//       .limitToLast(20)
//       .on('child_added', snapshot => callback(this.parse(snapshot)));
//   }

//   get timestamp() {
//     return firebase.database.ServerValue.TIMESTAMP;
//   }
  
//   send = messages => {
//     for (let i = 0; i < messages.length; i++) {
//       const { text, user } = messages[i];
//       const message = {
//         text,
//         user,
//         createdAt: this.timestamp,
//       };
//       this.ref.push(message);
//     }
//   };

//   refOff() {
//     this.ref.off();
//   }
// }

// const firebaseSvc = new FirebaseSvc();
// export default firebaseSvc;

// export { firebase };

// export const db = firebase.database();


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
    };
  }

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: id } = snapshot;
    const { key: _id } = snapshot; //needed for giftedchat
    const timestamp = new Date(numberStamp);

    const message = {
      id,
      _id,
      timestamp,
      text,
      user,
    };
    return message;
  };
  
  refOn = callback => {
    var search = 'users/'.concat(firebase.auth().currentUser.displayName).concat('/conversations/').concat(this.props.route.params.name).concat('/messages')
    db.ref(search)
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
  }

  componentDidMount() {
    this.refOn(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }

  // componentWillUnmount() {
  //   var search = 'users/'.concat(firebase.auth().currentUser.displayName).concat('/conversations/').concat(this.props.route.params.name).concat('/messages')
  //   console.log("Console will unmount")
  //   db.ref(search).off();
  // }

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        createdAt: this.timestamp,
      };
      var search = 'users/'.concat(firebase.auth().currentUser.displayName).concat('/conversations/').concat(this.props.route.params.name).concat('/info')
      db.ref(search).set({
        lastDate: this.timestamp,
        lastMessage: messages[i].text,
      })
      var search = 'users/'.concat(this.props.route.params.name).concat('/conversations/').concat(firebase.auth().currentUser.displayName).concat('/info')
      db.ref(search).set({
        lastDate: this.timestamp,
        lastMessage: messages[i].text,
      })
      search = 'users/'.concat(firebase.auth().currentUser.displayName).concat('/conversations/').concat(this.props.route.params.name).concat('/messages')
      db.ref(search).push(message);
      search = 'users/'.concat(this.props.route.params.name).concat('/conversations/').concat(firebase.auth().currentUser.displayName).concat('/messages')
      db.ref(search).push(message);
    }    
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.send}
        user={this.user}
      />
    );
  }
}
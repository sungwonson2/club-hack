import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const config = {
    apiKey: "AIzaSyB8d-g7CdARXUVHRtqVXEiAPLiJqZnDbPo",
    authDomain: "club-hack.firebaseapp.com",
    projectId: "club-hack",
    storageBucket: "club-hack.appspot.com",
    messagingSenderId: "944373176938",
    appId: "1:944373176938:web:1337f5d596fa3450b64813",
    measurementId: "G-F43S7DNMNY"
}

class FirebaseSvc {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      console.log("firebase apps already running...")
    }
  }

  get ref() {
    return firebase.database().ref('Messages');
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
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
  }

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
      this.ref.push(message);
    }
  };

  refOff() {
    this.ref.off();
  }
}

const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;

// const FirebaseConfig = {
//     apiKey: "AIzaSyB8d-g7CdARXUVHRtqVXEiAPLiJqZnDbPo",
//     authDomain: "club-hack.firebaseapp.com",
//     projectId: "club-hack",
//     storageBucket: "club-hack.appspot.com",
//     messagingSenderId: "944373176938",
//     appId: "1:944373176938:web:1337f5d596fa3450b64813",
//     measurementId: "G-F43S7DNMNY"
//   };
//   // firebase.firestore().enablePersistence()

//   if (!firebase.apps.length) {
//     firebase.initializeApp(FirebaseConfig);
  
// }

export { firebase };

export const db = firebase.database();

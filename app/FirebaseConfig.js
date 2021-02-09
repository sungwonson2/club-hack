import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const FirebaseConfig = {
    apiKey: "AIzaSyB8d-g7CdARXUVHRtqVXEiAPLiJqZnDbPo",
    authDomain: "club-hack.firebaseapp.com",
    projectId: "club-hack",
    storageBucket: "club-hack.appspot.com",
    messagingSenderId: "944373176938",
    appId: "1:944373176938:web:1337f5d596fa3450b64813",
    measurementId: "G-F43S7DNMNY"
  };
  // firebase.firestore().enablePersistence()

  if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseConfig);
  
}

export { firebase };

export const db = firebase.database();

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

firebase.initializeApp(config);

export { firebase };

export const db = firebase.database();

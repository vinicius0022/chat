import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAaN7tF8AOwHRNVlHNDf_gpOBCwIHwSysM",
    authDomain: "react-native-chat-bbbb4.firebaseapp.com",
    projectId: "react-native-chat-bbbb4",
    storageBucket: "react-native-chat-bbbb4.appspot.com",
    messagingSenderId: "1075733994418",
    appId: "1:1075733994418:web:b9c4c301c8a6c0703962ab",
    measurementId: "G-NJGF7BBZTZ"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
export { firebase };
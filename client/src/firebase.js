import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBxxU0tCi7r0v60iuLOy_bfJIcSk5QzweQ",
    authDomain: "kanbannew.firebaseapp.com",
    databaseURL: "https://kanbannew.firebaseio.com",
    projectId: "kanbannew",
    storageBucket: "kanbannew.appspot.com",
    messagingSenderId: "813815197870"
  };
  firebase.initializeApp(config);

export const Database = firebase.database()

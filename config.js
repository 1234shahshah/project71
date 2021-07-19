import firebase from "firebase"
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCIoQx1lvfmJVk5ApUBvIpLrJKBD7UprNo",
    authDomain: "story-bc2de.firebaseapp.com",
    projectId: "story-bc2de",
    storageBucket: "story-bc2de.appspot.com",
    messagingSenderId: "237349845290",
    appId: "1:237349845290:web:70d9def92c45486d28c653"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyA2Pt0EB55LRCf92yMTHEmIgXNfq9ryYlM",
    authDomain: "eccentrica-scoreboard.firebaseapp.com",
    databaseURL: "https://eccentrica-scoreboard.firebaseio.com",
    projectId: "eccentrica-scoreboard",
    storageBucket: "eccentrica-scoreboard.appspot.com",
    messagingSenderId: "263263130539",
    appId: "1:263263130539:web:ec42fd4f080cb1d7f778ee",
    measurementId: "G-JY1M3N429T"
  };
firebase.initializeApp(firebaseConfig);
export default firebase;
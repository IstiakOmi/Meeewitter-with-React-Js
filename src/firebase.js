import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB1v8IpFn2m44_6oodGswm1DW85RdJtim4",
  authDomain: "meeewitter.firebaseapp.com",
  databaseURL: "https://meeewitter.firebaseio.com",
  projectId: "meeewitter",
  storageBucket: "meeewitter.appspot.com",
  messagingSenderId: "754262170811",
  appId: "1:754262170811:web:f6887940e67c34f61c1d9e",
  measurementId: "G-FHJW7F12QE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;

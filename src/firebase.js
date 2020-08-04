import firebase from "firebase";

const firebaseApp   =   firebase.initializeApp({
    
  apiKey: "AIzaSyBZb-DIXmxZ3TiSwb3g-vgOjWpDwd3JGZ8",
  authDomain: "facebook-messenger-clone-ab596.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-ab596.firebaseio.com",
  projectId: "facebook-messenger-clone-ab596",
  storageBucket: "facebook-messenger-clone-ab596.appspot.com",
  messagingSenderId: "871884158666",
  appId: "1:871884158666:web:37eafe9a31ed2ffc0da633",
  measurementId: "G-FSRY0ZCN3Y"

});

const db = firebase.firestore();

export default db;
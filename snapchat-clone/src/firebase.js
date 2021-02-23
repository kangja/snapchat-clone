import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZM0NLUOVckWcfSJ2jttGJMsnCqNkrptE",
  authDomain: "snapchat-clone-82cf0.firebaseapp.com",
  projectId: "snapchat-clone-82cf0",
  storageBucket: "snapchat-clone-82cf0.appspot.com",
  messagingSenderId: "2182684313",
  appId: "1:2182684313:web:fc0d4cda7847f6713b6208",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebse.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider }

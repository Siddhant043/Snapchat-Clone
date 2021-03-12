import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASa6XkT093f6RXlk2CveNJ9XDjmGr068s",
  authDomain: "snapchat-clone-efe01.firebaseapp.com",
  projectId: "snapchat-clone-efe01",
  storageBucket: "snapchat-clone-efe01.appspot.com",
  messagingSenderId: "350691200424",
  appId: "1:350691200424:web:120b1f0ca2e9ccf2ae619d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBhXLc0TZxslkhHHlSYIuDvQ6QpuIw18lM",
  authDomain: "clone-482b7.firebaseapp.com",
  projectId: "clone-482b7",
  storageBucket: "clone-482b7.appspot.com",
  messagingSenderId: "1034863814619",
  appId: "1:1034863814619:web:dc1d9c6d661ed4bef8e9fe",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

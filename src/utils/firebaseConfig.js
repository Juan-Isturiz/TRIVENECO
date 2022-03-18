// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage"
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4fm8qN_-vHLjp3Pk_TlYX-j9AtaPVITM",
  authDomain: "triveneco.firebaseapp.com",
  projectId: "triveneco",
  storageBucket: "triveneco.appspot.com",
  messagingSenderId: "142105245156",
  appId: "1:142105245156:web:71c038bba73e365f9003f1",
  measurementId: "G-N4TML852GL"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore()
export const auth = app.auth()
export const storage = app.storage()
export const googleProvider = new firebase.auth.GoogleAuthProvider();
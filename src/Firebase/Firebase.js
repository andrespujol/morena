import firebase from 'firebase/app';
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyDRnXPG3Chpq4H50nGcaS-1s5Vgag1mb3M",
  authDomain: "morena-4f461.firebaseapp.com",
  projectId: "morena-4f461",
  storageBucket: "morena-4f461.appspot.com",
  messagingSenderId: "1041464955924",
  appId: "1:1041464955924:web:4114176c5225c23df08301"
  })


export const getFirebase= ()=>{
    return app
}

export const getFirestore = ()=>{
    return firebase.firestore()
}
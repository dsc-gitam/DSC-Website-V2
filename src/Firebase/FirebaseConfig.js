import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

var firebaseConfig ={
    apiKey: "AIzaSyAPEeg5IsxKbP8V_5Bnz-zVky4L4fYHt7o",
    authDomain: "dsc-website-265f7.firebaseapp.com",
    databaseURL: "https://dsc-website-265f7.firebaseio.com",
    projectId: "dsc-website-265f7",
    storageBucket: "dsc-website-265f7.appspot.com",
    messagingSenderId: "521071102377",
    appId: "1:521071102377:web:05494a891393ef99a39cb8",
    measurementId: "G-ZWQBWK4QL6"
  };


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();

export default firebase;
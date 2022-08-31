import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBf8aYccMKRXhcPxC_XNhKuE0qWMCH_h-0",
  authDomain: "myphoto-eb736.firebaseapp.com",
  projectId: "myphoto-eb736",
  storageBucket: "myphoto-eb736.appspot.com",
  messagingSenderId: "1021314362850",
  appId: "1:1021314362850:web:fc239bcd0cdf2b99b15dbb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
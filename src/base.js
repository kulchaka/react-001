import Rebase from 're-base'
import firebase from "firebase/app";
require('firebase/database')

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAR_EHaj5sKqv8xfZLMvNtXQ_HZFw0ms3Y",
  authDomain: "burger-store-hot.firebaseapp.com",
  databaseURL: "https://burger-store-hot-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "burger-store-hot",
  storageBucket: "burger-store-hot.appspot.com",
  messagingSenderId: "855328216283",
  appId: "1:855328216283:web:9543a231770d51e220a8fe"
})

const base = Rebase.createClass(firebaseConfig.database())

export {firebaseConfig}

export default base

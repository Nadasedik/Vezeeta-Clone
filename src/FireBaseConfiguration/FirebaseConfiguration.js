import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyACcqVbcyts0Yzwdo_-6LeN_Pw_U_LA8Ng",
  authDomain: "vezeeta-website-db.firebaseapp.com",
  databaseURL: "https://vezeeta-website-db-default-rtdb.firebaseio.com",
  projectId: "vezeeta-website-db",
  storageBucket: "vezeeta-website-db.appspot.com",
  messagingSenderId: "118999132560",
  appId: "1:118999132560:web:117741d75c1a3c81d42b15",
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

export const pharmacyAuth = getAuth(firebase.initializeApp(firebaseConfig));

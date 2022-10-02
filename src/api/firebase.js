import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

import { getAuth, onAuthStateChanged } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA6q_kJefa4kaLe4emXOLfeK9foqq63Xcg",
    authDomain: "cryptosight-a3f9b.firebaseapp.com",
    projectId: "cryptosight-a3f9b",
    storageBucket: "cryptosight-a3f9b.appspot.com",
    messagingSenderId: "263300410370",
    appId: "1:263300410370:web:2fb5070ecf9d345c5b0b1b",
    measurementId: "G-RWQSW2BG74"
    };
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const analytics = getAnalytics(firebaseApp);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(uid);
    // ...
  } else {
    // User is signed out
    console.log("user out")
    // ...
  }
});
export { db }
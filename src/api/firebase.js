import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
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
export { db }
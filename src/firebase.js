import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA0xgi6P9UcYzDK-FWeuKz9QpDPuG8zjSs",
    authDomain: "daou-870eb.firebaseapp.com",
    projectId: "daou-870eb",
    storageBucket: "daou-870eb.appspot.com",
    messagingSenderId: "769015794610",
    appId: "1:769015794610:web:1833ac513b181b43a4f2ab",
    measurementId: "G-QW0W6D6QER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);
export {db}
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0xgi6P9UcYzDK-FWeuKz9QpDPuG8zjSs",
    authDomain: "daou-870eb.firebaseapp.com",
    projectId: "daou-870eb",
    storageBucket: "daou-870eb.appspot.com",
    messagingSenderId: "769015794610",
    appId: "1:769015794610:web:1833ac513b181b43a4f2ab",
    measurementId: "G-QW0W6D6QER"
};

// firebaseConfig 정보로 firebase 시작
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export {firebase, firebaseApp, db};
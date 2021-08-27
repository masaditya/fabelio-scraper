// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8AnRXV3_u7C8mM9NHmPZ9qgksTxf82A8",
  authDomain: "ar-dashboard-9dcfa.firebaseapp.com",
  databaseURL:
    "https://ar-dashboard-9dcfa-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ar-dashboard-9dcfa",
  storageBucket: "ar-dashboard-9dcfa.appspot.com",
  messagingSenderId: "1077945381092",
  appId: "1:1077945381092:web:5a2f6f8e8bb71d17dc3cf1",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

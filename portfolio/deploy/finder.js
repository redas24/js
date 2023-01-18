// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChZxjqSyr16L0Vhl3QvLqNu0tGu0fDtKk",
  authDomain: "portfolio2024-ebc6f.firebaseapp.com",
  databaseURL:
    "https://portfolio2024-ebc6f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio2024-ebc6f",
  storageBucket: "portfolio2024-ebc6f.appspot.com",
  messagingSenderId: "884504086255",
  appId: "1:884504086255:web:7800faaf9a3692fa33bd1a",
  measurementId: "G-SXM1HMGXH9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

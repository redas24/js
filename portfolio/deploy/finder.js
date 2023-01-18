// Import the functions you need from the SDKs you need
import React from "react";
import ReactDOM from "react-dom";
import App from "../finder";

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

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Finder />
  </React.StrictMode>,
  rootElement
);

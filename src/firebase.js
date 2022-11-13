// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMMZUwvafLMYzG-A_7tFWKvhn5OCXNtP0",
  authDomain: "hri-header.firebaseapp.com",
  projectId: "hri-header",
  storageBucket: "hri-header.appspot.com",
  messagingSenderId: "715812624770",
  appId: "1:715812624770:web:efc276d95775863731179b",
  measurementId: "G-BQ12757HGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, doc, setDoc, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6J4dTzMhOiC3V6FN_UqA8hA1LzYf36dU",
  authDomain: "scratchfy-713a5.firebaseapp.com",
  projectId: "scratchfy-713a5",
  storageBucket: "scratchfy-713a5.firebasestorage.app",
  messagingSenderId: "337844191268",
  appId: "1:337844191268:web:6afa21589351782ba898b1",
  measurementId: "G-VR1MVK8HZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Export Firebase functions for use in other files
export { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  collection,
  doc,
  setDoc,
  serverTimestamp
};
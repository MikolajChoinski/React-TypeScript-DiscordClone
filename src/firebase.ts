// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnUu8u1Qb4lmLOHnYsTtAdhR54PVU7VAg",
  authDomain: "dandelion-app-baf0b.firebaseapp.com",
  projectId: "dandelion-app-baf0b",
  storageBucket: "dandelion-app-baf0b.appspot.com",
  messagingSenderId: "720218051039",
  appId: "1:720218051039:web:bcf8c9e116e32aea65746a",
  measurementId: "G-6C6BPEXFJJ"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
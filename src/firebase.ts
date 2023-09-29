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
  apiKey: "AIzaSyAGA1djohBNOfijbgFlzbolMMQ0uedERIM",
  authDomain: "discord-clone-cc240.firebaseapp.com",
  projectId: "discord-clone-cc240",
  storageBucket: "discord-clone-cc240.appspot.com",
  messagingSenderId: "336590013425",
  appId: "1:336590013425:web:c9cade7df38bab60adfa50",
  measurementId: "G-HLQSHEF14Z"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
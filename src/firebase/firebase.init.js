// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAh1qZQSgnqmqbB9iApgdo4aPRLKu9mGGw",
  authDomain: "simple-fiairbase-authe.firebaseapp.com",
  projectId: "simple-fiairbase-authe",
  storageBucket: "simple-fiairbase-authe.firebasestorage.app",
  messagingSenderId: "894361106392",
  appId: "1:894361106392:web:d9707030d5593fe77ee4ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

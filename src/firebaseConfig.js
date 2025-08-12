// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCrFUvjr7tA3ZvOZ9xplHNH7KjHVI5UozI",
  authDomain: "python-tutorial-cd9be.firebaseapp.com",
  projectId: "python-tutorial-cd9be",
  storageBucket: "python-tutorial-cd9be.appspot.com",
  messagingSenderId: "73451527393",
  appId: "1:73451527393:web:24c1e339b78ded2a7eeba0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

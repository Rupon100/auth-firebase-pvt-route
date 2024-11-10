 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyAOIgUKAB5mDY9NX-UBzSkaHT9dWwQhAts",
  authDomain: "auth-context-fe19a.firebaseapp.com",
  projectId: "auth-context-fe19a",
  storageBucket: "auth-context-fe19a.firebasestorage.app",
  messagingSenderId: "898023959729",
  appId: "1:898023959729:web:21c446411a1cc7402d8690"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
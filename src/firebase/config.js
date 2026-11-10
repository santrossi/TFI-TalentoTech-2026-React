import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// >>> MY <<< web app's Firebase configuration
// Esto es un proyecto educativo. En realidad, deben usarse variables de entorno.

const firebaseConfig = {
  apiKey: "AIzaSyBsyXZwG5FIrzhYtMFRUr5H-MMu6hO6ZLQ",
  authDomain: "tfi-talentotech2026.firebaseapp.com",
  projectId: "tfi-talentotech2026",
  storageBucket: "tfi-talentotech2026.firebasestorage.app",
  messagingSenderId: "25958265483",
  appId: "1:25958265483:web:32679c7497e3dd4f5bda8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-recipe-app-95f5e.firebaseapp.com",
  projectId: "react-recipe-app-95f5e",
  storageBucket: "react-recipe-app-95f5e.appspot.com",
  messagingSenderId: "538032046461",
  appId: "1:538032046461:web:ff396cc8c0c9502eac8c14"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfH-VWTi4oLgS-lMR0IRu7opIsp0kWBEI",
  authDomain: "kitsune-wear.firebaseapp.com",
  projectId: "kitsune-wear",
  storageBucket: "kitsune-wear.firebasestorage.app",
  messagingSenderId: "492162964173",
  appId: "1:492162964173:web:6a177fe4d8be2d7c682784",
  measurementId: "G-V45N29CM2H"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
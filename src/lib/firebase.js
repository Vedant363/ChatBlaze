import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatblaze-ca40e.firebaseapp.com",
  projectId: "chatblaze-ca40e",
  storageBucket: "chatblaze-ca40e.appspot.com",
  messagingSenderId: "504679348187",
  appId: "1:504679348187:web:17364cab9c58e91c9399fe"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
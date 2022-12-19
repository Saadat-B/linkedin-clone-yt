import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGgbiXv_A0oUakj0L_6y4nPfnkvggpyyU",
  authDomain: "linkedin-clone-yt-4f772.firebaseapp.com",
  projectId: "linkedin-clone-yt-4f772",
  storageBucket: "linkedin-clone-yt-4f772.appspot.com",
  messagingSenderId: "662912370494",
  appId: "1:662912370494:web:182437be98bd96b9dd8e6f",
  measurementId: "G-PL312JLR24",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

export { db, auth };

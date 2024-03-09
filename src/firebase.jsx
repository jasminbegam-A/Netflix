import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlR5TwXRamfjV8-kST9u40poQiYoDHKb4",
  authDomain: "netflix-7a5d3.firebaseapp.com",
  projectId: "netflix-7a5d3",
  storageBucket: "netflix-7a5d3.appspot.com",
  messagingSenderId: "1095366419870",
  appId: "1:1095366419870:web:4f413c98353b939f78628f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
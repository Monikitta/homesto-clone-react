// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBolIwj7hpL-jE98vrss0PsJUurY7vZyC8",
  authDomain: "homes-to.firebaseapp.com",
  projectId: "homes-to",
  storageBucket: "homes-to.appspot.com",
  messagingSenderId: "856275821619",
  appId: "1:856275821619:web:c52c893b6a013b7b046f46"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore(); 
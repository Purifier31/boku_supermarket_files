import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDShiu6oEezcRXolmFW0X8z2YfFjFgz3Sk",
  authDomain: "boku-supermarket.firebaseapp.com",
  projectId: "boku-supermarket",
  storageBucket: "boku-supermarket.appspot.com",
  messagingSenderId: "768497460555",
  appId: "1:768497460555:web:b4fc4d2d927bfc2ee8b4ce",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


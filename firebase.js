// firebase.js (ES module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";
import { collection as fbCollection, addDoc as fbAddDoc, getDocs as fbGetDocs, query as fbQuery, orderBy as fbOrderBy } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

// Replace these values with your Firebase project's config if different
const firebaseConfig = {
  apiKey: "AIzaSyDShiu6oEezcRXolmFW0X8z2YfFjFgz3Sk",
  authDomain: "boku-supermarket.firebaseapp.com",
  projectId: "boku-supermarket",
  storageBucket: "boku-supermarket.appspot.com",
  messagingSenderId: "768497460555",
  appId: "1:768497460555:web:b4fc4d2d927bfc2ee8b4ce",
  measurementId: "G-7BZXYDJDM7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, fbCollection, fbAddDoc, fbGetDocs, fbQuery, fbOrderBy };

const documentData ={
  "name": "Close up",
  "code": "6151100134431",
  "expiry": "2028-08-03",
  "status": "valid"
}

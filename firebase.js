// firebase.js (ES module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { collection as fbCollection, addDoc as fbAddDoc, getDocs as fbGetDocs, query as fbQuery, orderBy as fbOrderBy } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzgKb9arTPpBu_uq3ELKutw3pH0NeMP7o",
  authDomain: "boku--supermarket.firebaseapp.com",
  projectId: "boku--supermarket",
  storageBucket: "boku--supermarket.firebasestorage.app",
  messagingSenderId: "254106843610",
  appId: "1:254106843610:web:f05cd78b7cf5fe505228e3",
  measurementId: "G-PHNVC9CDZG"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, fbCollection, fbAddDoc, fbGetDocs, fbQuery, fbOrderBy };


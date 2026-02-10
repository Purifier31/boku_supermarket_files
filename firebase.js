// firebase.js (ES module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { collection as fbCollection, addDoc as fbAddDoc, getDocs as fbGetDocs, query as fbQuery, orderBy as fbOrderBy } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDta4QPZsFvmTykHrrMRYXnsvZVoMPvliM",
  authDomain: "emma-bokku.firebaseapp.com",
  projectId: "emma-bokku",
  storageBucket: "emma-bokku.firebasestorage.app",
  messagingSenderId: "517649758088",
  appId: "1:517649758088:web:bf7f630aa277060d65ac3d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, fbCollection, fbAddDoc, fbGetDocs, fbQuery, fbOrderBy };


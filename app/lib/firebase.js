// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWe94NDe--AEaO1DbT5K2eSgBVwvI-ckE",
  authDomain: "skill-creatives-1094c.firebaseapp.com",
  databaseURL: "https://skill-creatives-1094c-default-rtdb.firebaseio.com",
  projectId: "skill-creatives-1094c",
  storageBucket: "skill-creatives-1094c.firebasestorage.app",
  messagingSenderId: "154310033891",
  appId: "1:154310033891:web:5f3e6e5cd3ca545bc160d6",
  measurementId: "G-7W8GGBB2TF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =getDatabase(app)

export { db };

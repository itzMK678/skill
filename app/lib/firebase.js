// app/lib/firebase.js or lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDWe94NDe--AEaO1DbT5K2eSgBVwvI-ckE",
  authDomain: "skill-creatives-1094c.firebaseapp.com",
  projectId: "skill-creatives-1094c",
  storageBucket: "skill-creatives-1094c.appspot.com", // ✅ fix typo (.app → .com)
  messagingSenderId: "154310033891",
  appId: "1:154310033891:web:5f3e6e5cd3ca545bc160d6",
  measurementId: "G-7W8GGBB2TF",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db =getDatabase(app)

export { db };

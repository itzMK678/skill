// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase} from 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyCWHTCEwTNPM1D_rS16MA8PXcwamXPZBjY",
  authDomain: "skill-creatives.firebaseapp.com",
  projectId: "skill-creatives",
  storageBucket: "skill-creatives.firebasestorage.app",
  messagingSenderId: "917461024532",
  appId: "1:917461024532:web:1024dccb7186cf46d00c01",
  measurementId: "G-SC9K4SD8SK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8nsoIXxatjiJ7N-5P7ZN0lQEKDbEN-T4",
  authDomain: "collegegate-39ee4.firebaseapp.com",
  projectId: "collegegate-39ee4",
  storageBucket: "collegegate-39ee4.appspot.com",
  messagingSenderId: "579036163550",
  appId: "1:579036163550:web:9981cb848560656673814f",
  measurementId: "G-0BE77XMPWJ",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);


export { auth, analytics };
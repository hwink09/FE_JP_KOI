// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClunveXwa13_PW0mmH0Li32rGauxn_3CA",
  authDomain: "koijp-95280.firebaseapp.com",
  projectId: "koijp-95280",
  storageBucket: "koijp-95280.appspot.com",
  messagingSenderId: "504149978303",
  appId: "1:504149978303:web:9b9c9451a5c7dbeb56aa0a",
  measurementId: "G-LG6M8VFW80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider();

export { analytics, googleProvider }; // Export googleProvider để sử dụng trong các file khác

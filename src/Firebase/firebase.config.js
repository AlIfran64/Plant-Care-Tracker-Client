// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMa0Zg6Z_QNVvLsUd5uLGkhYKrrGxSzTU",
  authDomain: "plantify-7ddd6.firebaseapp.com",
  projectId: "plantify-7ddd6",
  storageBucket: "plantify-7ddd6.firebasestorage.app",
  messagingSenderId: "349187328585",
  appId: "1:349187328585:web:5ff7bbdf4fe49a4fdf4d98",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

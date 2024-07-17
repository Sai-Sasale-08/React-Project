// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMVkxMnvIXy4Qpg0L_bMTiGgZiBZqmG_w",
  authDomain: "project-drybar.firebaseapp.com",
  projectId: "project-drybar",
  storageBucket: "project-drybar.appspot.com",
  messagingSenderId: "773924093720",
  appId: "1:773924093720:web:28cea0335069a02ce1686d",
  measurementId: "G-V6N1NDFETL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
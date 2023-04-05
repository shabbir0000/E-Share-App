// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
import {ref} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxzUQXYU3I6-kLmEr37rd2QM2HhItqjAE",
  authDomain: "e-share-fabcf.firebaseapp.com",
  projectId: "e-share-fabcf",
  storageBucket: "e-share-fabcf.appspot.com",
  messagingSenderId: "201305057556",
  appId: "1:201305057556:web:f64b3254570c1b74377a01"
};

// Initialize Firebase
export const ref1 = ref;
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

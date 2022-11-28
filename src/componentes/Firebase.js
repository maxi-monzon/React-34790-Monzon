import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBgwdxxsGUy3_l-Rvs4Rpdq5uCL2I2XA5k",
  authDomain: "carpinteriamonzon.firebaseapp.com",
  projectId: "carpinteriamonzon",
  storageBucket: "carpinteriamonzon.appspot.com",
  messagingSenderId: "912641432424",
  appId: "1:912641432424:web:59e26e205cde0e817014dd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAP-yjRwL2E6-phX1-Xb3nua-lgzOMxPgA",
  authDomain: "tiktok---clone-78242.firebaseapp.com",
  projectId: "tiktok---clone-78242",
  storageBucket: "tiktok---clone-78242.appspot.com",
  messagingSenderId: "1089021123602",
  appId: "1:1089021123602:web:3697cef39ff71727c88ccb"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
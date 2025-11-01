import { initializeApp } from "firebase/app";
require('dotenv').config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: "luminae-ca224.firebasestorage.app",
  messagingSenderId: "1048878162907",
  appId: process.env.APP_ID
};

export const app = initializeApp(firebaseConfig);


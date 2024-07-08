// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyARtTH4AWXy2VlYjhuNBaVsZCS5ckM8TK0",
    authDomain: "aman-netflix.firebaseapp.com",
    projectId: "aman-netflix",
    storageBucket: "aman-netflix.appspot.com",
    messagingSenderId: "757949664860",
    appId: "1:757949664860:web:57d18eca6c329941b8e099",
    measurementId: "G-G57HLWTWZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
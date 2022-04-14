// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS81QmRIBN-_VZ9tyhvOmuc9nKRwNCwQA",
  authDomain: "genius-car-sevices-mine.firebaseapp.com",
  projectId: "genius-car-sevices-mine",
  storageBucket: "genius-car-sevices-mine.appspot.com",
  messagingSenderId: "536112171936",
  appId: "1:536112171936:web:99e6fcf735af5021a972c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
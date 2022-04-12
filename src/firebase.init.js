// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxDJFbm7sWKPrgaKJDVIMVUKEbFYCqqhs",
  authDomain: "genius-car-services-f1510.firebaseapp.com",
  projectId: "genius-car-services-f1510",
  storageBucket: "genius-car-services-f1510.appspot.com",
  messagingSenderId: "537204163295",
  appId: "1:537204163295:web:f9070f56ad7327f6761f6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

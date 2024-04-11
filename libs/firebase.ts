// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAP_WigeuL936LKI4IAiO3GyRNkQAm8NCA",
  authDomain: "e-shop-vid-25af1.firebaseapp.com",
  projectId: "e-shop-vid-25af1",
  storageBucket: "e-shop-vid-25af1.appspot.com",
  messagingSenderId: "199309775607",
  appId: "1:199309775607:web:a24bb3aa385bef22cfb9f2"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyBLGSUBR78Ie9wxpDv7mi-YOscef_4813o",
  authDomain: "blogging-website-43e51.firebaseapp.com",
  projectId: "blogging-website-43e51",
  storageBucket: "blogging-website-43e51.appspot.com",
  messagingSenderId: "1055284719242",
  appId: "1:1055284719242:web:740e86b8b2716253da8773"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
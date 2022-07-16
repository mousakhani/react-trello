// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3skdrbJZzePlVmXfLnA6n77dTMDcOAOk",
  authDomain: "react-trello-a5884.firebaseapp.com",
  projectId: "react-trello-a5884",
  storageBucket: "react-trello-a5884.appspot.com",
  messagingSenderId: "288090673689",
  appId: "1:288090673689:web:99962454fcf5479ed1d088",
  measurementId: "G-89BG1B8TWE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

let boardsRef = collection(db, "boards");
let listsRef = collection(db, "lists");
let cardsRef = collection(db, "cards");

export { boardsRef, listsRef, cardsRef, db };

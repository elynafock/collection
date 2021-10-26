import { getStorage } from 'firebase/storage'
import { getFirestore, Timestamp } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjxMlKNEjazRT_Tc0XfH8H4MRLvfgNdnk",
  authDomain: "firegram-ef.firebaseapp.com",
  projectId: "firegram-ef",
  storageBucket: "firegram-ef.appspot.com",
  messagingSenderId: "948847195702",
  appId: "1:948847195702:web:a276bbed11442395cf4a97",
  measurementId: "G-BS4BX3HYD1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const projectStorage = getStorage();
const projectFirestore = getFirestore();
const timestamp = Timestamp;

export {projectStorage,projectFirestore,timestamp};
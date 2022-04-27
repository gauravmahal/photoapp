// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3LMsDQE-EMM8VhvjAkH32fb7merlcCVo",
    authDomain: "photowall-47287.firebaseapp.com",
    projectId: "photowall-47287",
    storageBucket: "photowall-47287.appspot.com",
    messagingSenderId: "847495746668",
    appId: "1:847495746668:web:5e510d8bf43b18a9f63449",
    measurementId: "G-TXXJF6PWQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const database = getDatabase(app);

export { database }
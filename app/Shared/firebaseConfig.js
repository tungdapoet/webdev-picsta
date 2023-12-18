// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD03C1Q7hjuwFM7LKwGacNlAtC1TjcsOyI",
    authDomain: "picsta-722c5.firebaseapp.com",
    projectId: "picsta-722c5",
    storageBucket: "picsta-722c5.appspot.com",
    messagingSenderId: "922332438364",
    appId: "1:922332438364:web:615fb421dfec3d5e2fab99",
    measurementId: "G-PXK13VVLRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
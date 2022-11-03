// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from '@firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEkPs2uhkn0Q_WboQXSIqI_SyK_fJc6Gk",
    authDomain: "fire-react-90121.firebaseapp.com",
    projectId: "fire-react-90121",
    storageBucket: "fire-react-90121.appspot.com",
    messagingSenderId: "955544180850",
    appId: "1:955544180850:web:dbe3d910fed6a2a0954aeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
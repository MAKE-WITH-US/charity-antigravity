// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByQSIOjMyBBOET35gdwBy4UaDIgXfpZok",
    authDomain: "charity-e297e.firebaseapp.com",
    projectId: "charity-e297e",
    storageBucket: "charity-e297e.firebasestorage.app",
    messagingSenderId: "1075506898766",
    appId: "1:1075506898766:web:4673b175a48b728023a01f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };

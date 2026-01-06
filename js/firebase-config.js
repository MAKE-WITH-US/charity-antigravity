// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";


// Your web app's Firebase configuration
// Note: These are client-side public keys, safe to expose
const firebaseConfig = {
    apiKey: "AIzaSyByQSIOjMyBBOET35gdwBy4UaDIgXfpZok",
    authDomain: "charity-e297e.firebaseapp.com",
    projectId: "charity-e297e",
    storageBucket: "charity-e297e.firebasestorage.app",
    messagingSenderId: "1075506898766",
    appId: "1:1075506898766:web:4673b175a48b728023a01f"
};

// Initialize Firebase (client-side only)
// This code only runs in the browser, not during SSR
let app, auth, db, storage;

try {
    if (typeof window !== 'undefined') {
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        db = getFirestore(app);
        storage = getStorage(app);
    } else {
        // Server-side fallback (should not execute in production)
        console.warn('Firebase initialization attempted on server-side');
    }
} catch (error) {
    console.error('Firebase initialization error:', error);
    // Provide fallback objects to prevent crashes
    app = null;
    auth = null;
    db = null;
    storage = null;
}

export { auth, db, storage };

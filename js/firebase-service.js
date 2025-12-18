import { auth, db } from './firebase-config.js';
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import {
    collection,
    getDocs,
    getDoc,
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
    query,
    where,
    orderBy
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// --- Auth Services ---

export const loginAdmin = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};

export const logoutAdmin = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Logout Error", error);
    }
};

export const monitorAuthState = (callback) => {
    onAuthStateChanged(auth, callback);
};

// --- Blog Services ---

const BLOGS_COLLECTION = 'blogs';

export const getAllBlogs = async () => {
    try {
        // Order by createdAt descending
        const q = query(collection(db, BLOGS_COLLECTION), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            _id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error fetching blogs: ", error);
        return [];
    }
};

export const getBlogBySlug = async (slug) => {
    try {
        const q = query(collection(db, BLOGS_COLLECTION), where("slug", "==", slug));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) return null;
        const doc = querySnapshot.docs[0];
        return { _id: doc.id, ...doc.data() };
    } catch (error) {
        console.error("Error fetching blog by slug: ", error);
        return null;
    }
};

export const createBlog = async (blogData) => {
    try {
        const docRef = await addDoc(collection(db, BLOGS_COLLECTION), {
            ...blogData,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
        return docRef.id;
    } catch (error) {
        throw error;
    }
};

export const updateBlog = async (id, blogData) => {
    try {
        const docRef = doc(db, BLOGS_COLLECTION, id);
        await updateDoc(docRef, {
            ...blogData,
            updatedAt: new Date().toISOString()
        });
    } catch (error) {
        throw error;
    }
};

export const deleteBlog = async (id) => {
    try {
        await deleteDoc(doc(db, BLOGS_COLLECTION, id));
    } catch (error) {
        throw error;
    }
};

// --- Storage Services ---

const REPORTS_COLLECTION = 'sent-reports';

export const createReportLog = async (data) => {
    try {
        await addDoc(collection(db, REPORTS_COLLECTION), {
            ...data,
            sentAt: new Date().toISOString(), // Requirements say 'sentAt'
            createdAt: new Date().toISOString() // Keep createdAt for consistency if needed, but requirements strict
        });
    } catch (error) {
        throw error;
    }
};

export const getFileLogs = async () => {
    try {
        const q = query(collection(db, REPORTS_COLLECTION), orderBy('sentAt', 'desc'));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            _id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error fetching file logs: ", error);
        return [];
    }
};

const CLOUDINARY_CLOUD_NAME = 'di5p3wflw';
const CLOUDINARY_UPLOAD_PRESET = 'blog_unsigned';

// Cloudinary upload implementation for Blogs
export const uploadImage = async (file) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Upload failed');
        }

        const data = await response.json();
        return data.secure_url;
    } catch (error) {
        console.error("Cloudinary upload failed:", error);
        throw error;
    }
};

// REPORT UPLOAD (Strict Requirements: auto/upload, reports folder)
export const uploadReportFile = async (file) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        formData.append('folder', 'reports'); // Explicit requirement

        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error?.message || 'Report upload failed');
        }

        const data = await response.json();
        // Return secure_url and format (for fileType) if needed
        return {
            url: data.secure_url,
            format: data.format || file.name.split('.').pop()
        };
    } catch (error) {
        console.error("Report upload failed:", error);
        throw error;
    }
};

import { auth, db, storage } from './firebase-config.js';
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import {
    ref,
    uploadBytesResumable,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";
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
    orderBy,
    limit,
    serverTimestamp
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
            sentAt: new Date().toISOString(),
            createdAt: new Date().toISOString()
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

// REPORT UPLOAD - Fixed to use correct resource_type and presets
export const uploadReportFile = async (file) => {
    try {
        // 1. DYNAMIC FILE TYPE DETECTION
        // Do NOT rely on file.type alone as it can be unreliable
        const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');

        // 2. RESOURCE TYPE & PRESET SELECTION
        // "blog_unsigned" is likely an image-only preset (with transformations)
        // We use "pdf_raw_unsigned" for RAW files as requested (or fallback to 'blog_unsigned' if not set, but strict endpoint is key)
        const resourceType = isPdf ? 'raw' : 'image';
        const uploadPreset = isPdf ? 'pdf_raw_unsigned' : CLOUDINARY_UPLOAD_PRESET;

        // 3. CORRECT ENDPOINT UPLOAD
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);
        formData.append('folder', 'reports');

        console.log(`Uploading ${file.name} as ${resourceType} using preset ${uploadPreset}`);

        const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/${resourceType}/upload`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Cloudinary Error:', errorData);
            throw new Error(errorData.error?.message || `Upload failed: ${response.statusText}`);
        }

        const data = await response.json();

        let finalUrl = data.secure_url;

        // 4. FIX URL FOR DOWNLOAD
        if (isPdf && finalUrl) {
            // raw/upload URLs usually don't have transformations, but we add fl_attachment
            // to ensure the browser strictly downloads it.
            // If the URL logic is standard: res.cloudinary.com/<cloud>/raw/upload/v<ver>/<id>.pdf
            // We want: res.cloudinary.com/<cloud>/raw/upload/fl_attachment/v<ver>/<id>.pdf
            if (!finalUrl.includes('fl_attachment')) {
                finalUrl = finalUrl.replace('/upload/', '/upload/fl_attachment/');
            }
        }

        return {
            url: finalUrl,
            format: data.format || (isPdf ? 'pdf' : 'jpg')
        };
    } catch (error) {
        console.error("Report upload failed:", error);
        throw error;
    }
};

// FIREBASE STORAGE UPLOAD
export const uploadFileToStorage = async (file, onProgress) => {
    try {
        const date = new Date();
        const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        const fileName = `${Date.now()}_${file.name}`;
        const storagePath = `admin-uploads/${yearMonth}/${fileName}`;

        const storageRef = ref(storage, storagePath);
        const uploadTask = uploadBytesResumable(storageRef, file);

        return new Promise((resolve, reject) => {
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    if (onProgress) onProgress(progress);
                    console.log('Upload is ' + progress + '% done');
                },
                (error) => {
                    console.error("Firebase Storage Upload Error:", error);
                    reject(error);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve({
                        url: downloadURL,
                        name: file.name,
                        type: file.type,
                        size: file.size,
                        path: storagePath
                    });
                }
            );
        });
    } catch (error) {
        console.error("Upload function error:", error);
        throw error;
    }
};

// --- Donation Services ---

const DONATIONS_COLLECTION = 'donations';

export const addDonation = async (donationData) => {
    try {
        const docRef = await addDoc(collection(db, DONATIONS_COLLECTION), {
            ...donationData,
            donatedAt: serverTimestamp()
        });
        return docRef.id;
    } catch (error) {
        throw error;
    }
};

export const getRecentDonations = async (limitCount = 20) => {
    try {
        const q = query(
            collection(db, DONATIONS_COLLECTION),
            orderBy('donatedAt', 'desc'),
            limit(limitCount)
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            _id: doc.id,
            ...doc.data(),
            donatedAt: doc.data().donatedAt ? doc.data().donatedAt.toDate() : new Date()
        }));
    } catch (error) {
        console.error("Error fetching donations: ", error);
        return [];
    }
};

export { serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

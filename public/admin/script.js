import {
    loginAdmin,
    logoutAdmin,
    monitorAuthState,
    getAllBlogs,
    createBlog,
    updateBlog,
    deleteBlog,
    uploadImage,
    createReportLog,
    uploadReportFile,
    getFileLogs
} from '/js/firebase-service.js';

// Initialize EmailJS
try {
    emailjs.init("s-yzfkw_g8ZBWm5WJ");
} catch (e) {
    console.error("EmailJS Init Error:", e);
}

// Elements
const loginView = document.getElementById('login-view');
const dashboardView = document.getElementById('dashboard-view');
const editorView = document.getElementById('editor-view');

const loginForm = document.getElementById('login-form');
const blogsList = document.getElementById('blogs-list');
const blogForm = document.getElementById('blog-form');
const logoutBtn = document.getElementById('logout-btn');
const addBlogBtn = document.getElementById('add-blog-btn');
const cancelEditBtn = document.getElementById('cancel-edit-btn');

// State
let isEditing = false;
let currentUser = null;

// Initialization
function init() {
    monitorAuthState((user) => {
        currentUser = user;
        if (user) {
            showDashboard();
        } else {
            showLogin();
        }
    });
}

function showLogin() {
    loginView.classList.remove('hidden');
    dashboardView.classList.add('hidden');
    editorView.classList.add('hidden');
}

function showDashboard() {
    loginView.classList.add('hidden');
    dashboardView.classList.remove('hidden');
    editorView.classList.add('hidden');
    fetchBlogs();
}

function showEditor(blog = null) {
    loginView.classList.add('hidden');
    dashboardView.classList.add('hidden');
    editorView.classList.remove('hidden');

    // Reset Form
    document.getElementById('blog-id').value = '';
    document.getElementById('blog-title').value = '';
    document.getElementById('blog-slug').value = '';
    document.getElementById('blog-description').value = '';
    document.getElementById('blog-content').value = '';
    document.getElementById('blog-author').value = 'Admin';
    document.getElementById('blog-status').value = 'published';
    document.getElementById('blog-image').value = '';
    document.getElementById('blog-subheading').value = '';
    document.getElementById('image-preview').style.display = 'none';

    if (blog) {
        isEditing = true;
        document.getElementById('editor-title').innerText = 'Edit Blog';

        document.getElementById('blog-id').value = blog._id;
        document.getElementById('blog-title').value = blog.title;
        document.getElementById('blog-slug').value = blog.slug;
        document.getElementById('blog-description').value = blog.description;
        document.getElementById('blog-subheading').value = blog.subHeading || '';
        document.getElementById('blog-content').value = blog.content;
        document.getElementById('blog-author').value = blog.author;
        document.getElementById('blog-status').value = blog.status;

        if (blog.featuredImage) {
            document.getElementById('image-preview').src = blog.featuredImage;
            document.getElementById('image-preview').style.display = 'block';
        }
    } else {
        isEditing = false;
        document.getElementById('editor-title').innerText = 'Add New Blog';
    }
}

// Navigation & Tabs
const navBlogs = document.getElementById('nav-blogs');
const navFiles = document.getElementById('nav-files');
const tabBlogs = document.getElementById('tab-blogs');
const tabFiles = document.getElementById('tab-files');

if (navBlogs && navFiles) {
    navBlogs.addEventListener('click', () => {
        navBlogs.classList.add('active');
        navFiles.classList.remove('active');
        tabBlogs.classList.remove('hidden');
        tabFiles.classList.add('hidden');
    });

    navFiles.addEventListener('click', () => {
        navFiles.classList.add('active');
        navBlogs.classList.remove('active');
        tabFiles.classList.remove('hidden');
        tabBlogs.classList.add('hidden');
        fetchFileLogs();
    });
}

// Toast Function
function showToast(message, duration = 3000, type = '') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerText = message;
    container.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, duration);
}

// Authentication
const togglePassword = document.getElementById('toggle-password');
if (togglePassword) {
    togglePassword.addEventListener('click', () => {
        const passwordInput = document.getElementById('password');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.innerText = type === 'password' ? '👁️' : '🙈';
    });
}

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // Handle "admin" username by appending domain if missing
    if (!username.includes('@')) {
        // Assumption: If user types "admin", they mean the admin email for this trust.
        // Trying the most likely domain based on the website identity.
        username += '@karunyacharitabletrust.org';
    }

    try {
        await loginAdmin(username, password);
        showToast('Login Successful!', 1500, 'success');
    } catch (err) {
        console.error(err);
        let msg = err.message;
        if (err.code === 'auth/invalid-email') {
            msg = 'Invalid email address format.';
        } else if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
            msg = 'Invalid username or password.';
        }
        document.getElementById('login-error').innerText = msg;
    }
});

logoutBtn.addEventListener('click', async () => {
    await logoutAdmin();
    location.reload();
});

// Blogs Listing
// Blogs Listing
const handleEditBlog = async (id) => {
    try {
        const blogs = await getAllBlogs();
        const blog = blogs.find(b => b._id === id);
        if (blog) showEditor(blog);
    } catch (err) {
        console.error("Edit error:", err);
        showToast("Error loading blog for editing");
    }
};

const handleDeleteBlog = async (id) => {
    console.log("Delete requested for:", id);
    if (confirm('Are you sure you want to delete this blog? This action cannot be undone.')) {
        try {
            await deleteBlog(id);
            showToast('Blog deleted successfully!', 1500);
            await fetchBlogs();
        } catch (error) {
            console.error("Delete failed:", error);
            alert('Failed to delete blog: ' + error.message);
        }
    }
};

async function fetchBlogs() {
    try {
        const blogs = await getAllBlogs();

        if (blogs.length === 0) {
            blogsList.innerHTML = `<tr><td colspan="4" style="text-align:center; padding: 20px; color: #666;">No blogs available. Click "Add New Blog" to create one.</td></tr>`;
        } else {
            blogsList.innerHTML = blogs.map(blog => `
                <tr>
                    <td><img src="${blog.featuredImage || 'https://placehold.co/100x100?text=No+Image'}" class="thumb-small"></td>
                    <td>${blog.title}</td>
                    <td>${blog.status}</td>
                    <td>
                        <button class="btn-sm btn-edit" data-id="${blog._id}">Edit</button>
                        <!-- <button class="btn-sm btn-delete" data-id="${blog._id}">Delete</button> -->
                    </td>
                </tr>
            `).join('');

            // Attach Event Listeners Safely
            blogsList.querySelectorAll('.btn-edit').forEach(btn => {
                btn.addEventListener('click', () => handleEditBlog(btn.dataset.id));
            });

            // blogsList.querySelectorAll('.btn-delete').forEach(btn => {
            //     btn.addEventListener('click', () => handleDeleteBlog(btn.dataset.id));
            // });
        }
    } catch (err) {
        console.error(err);
        showToast('Error fetching blogs');
    }
}

// Blog Create/Update
addBlogBtn.addEventListener('click', () => showEditor());
cancelEditBtn.addEventListener('click', showDashboard);

blogForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('blog-id').value;
    const title = document.getElementById('blog-title').value;
    const slug = document.getElementById('blog-slug').value;
    const description = document.getElementById('blog-description').value;
    const subHeading = document.getElementById('blog-subheading').value;
    const content = document.getElementById('blog-content').value;
    const author = document.getElementById('blog-author').value;
    const status = document.getElementById('blog-status').value;

    let featuredImage = '';
    const imageInput = document.getElementById('blog-image');

    if (imageInput.files[0]) {
        try {
            featuredImage = await uploadImage(imageInput.files[0]);
        } catch (e) {
            alert('Image upload failed: ' + e.message);
            return;
        }
    } else {
        const imgPreview = document.getElementById('image-preview');
        if (imgPreview.src && imgPreview.style.display !== 'none') {
            featuredImage = imgPreview.src;
        }
    }

    const blogData = {
        title, slug, description, subHeading, content, author, status, featuredImage
    };

    const submitBtn = blogForm.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerText;
    const loadingText = isEditing ? 'Updating...' : 'Creating...';

    submitBtn.innerText = loadingText;
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    submitBtn.style.cursor = 'not-allowed';

    try {
        if (isEditing) {
            await updateBlog(id, blogData);
            showToast('Blog updated!', 1500);
        } else {
            await createBlog(blogData);
            showToast('Blog created!', 1500);
        }
        showDashboard();
    } catch (err) {
        console.error(err);
        alert('Something went wrong: ' + err.message);
    } finally {
        submitBtn.innerText = originalBtnText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        submitBtn.style.cursor = 'pointer';
    }
});

// File Sending Logic (Updated with EmailJS and Firestore)
const fileForm = document.getElementById('file-send-form');
const fileLogsList = document.getElementById('file-logs-list');

if (fileForm) {
    fileForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = fileForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Sending...";
        submitBtn.disabled = true;

        const patientName = document.getElementById('patient-name').value;
        const phoneNumber = document.getElementById('patient-phone').value;
        const email = document.getElementById('patient-email').value;
        const fileInput = document.getElementById('patient-file');

        if (!fileInput.files[0]) {
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
            return;
        }

        try {
            // 1. Upload to Cloudinary (Reports Folder)
            const { url, format } = await uploadReportFile(fileInput.files[0]);

            // 2. Send Email via EmailJS
            const templateParams = {
                file_url: url,
                to_email: email,
                patient_email: email,
                email: email,
                to_name: patientName,
                patient_name: patientName,
                name: patientName,
                link: url,
                url: url,
                download_link: url,
                file_link: url,
                message: `Here is your file: ${url}`,
                reply_to: 'admin@karunyacharitabletrust.org',
                from_name: 'Karunya Trust'
            };

            const response = await emailjs.send("service_kihk1eo", "template_e1ugog3", templateParams, "s-yzfkw_g8ZBWm5WJ");

            console.log("EmailJS Success:", response.status, response.text);
            showToast('Report sent successfully!', 1500);
            alert("Email Sent Successfully! API Response: " + response.status);
            fileForm.reset();

            // 3. Log to Firestore (Separate Try-Catch to avoid blocking Success UI)
            try {
                await createReportLog({
                    patientName,
                    phoneNumber,
                    patientEmail: email,
                    fileUrl: url,
                    fileType: format,
                    status: 'success'
                });
                fetchFileLogs();
            } catch (dbError) {
                console.error("Firestore Error:", dbError);
                if (dbError.code === 'permission-denied') {
                    alert("Note: Report was sent to email, but not saved to History because of Firebase Permissions. Please update Firestore Rules to allow 'sent-reports'.");
                }
            }

        } catch (error) {
            console.error(error);
            alert('Error sending report: ' + error.message);
            try {
                await createReportLog({
                    patientEmail: email,
                    fileUrl: '',
                    fileType: 'unknown',
                    status: 'failed'
                });
            } catch (e) { console.error("Failed to log error", e); }
        } finally {
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
        }
    });
}

async function fetchFileLogs() {
    try {
        const logs = await getFileLogs();

        fileLogsList.innerHTML = logs.map(log => `
            <tr>
                <td>${new Date(log.sentAt || log.createdAt).toLocaleDateString()}</td>
                <td>${log.patientName || log.patientEmail}</td>
                <td><a href="${log.fileUrl || log.filePath}" target="_blank">View File</a></td>
                <td><span style="color: ${log.status === 'success' ? 'green' : 'red'};">${log.status}</span></td>
            </tr>
        `).join('');
    } catch (error) {
        console.error('Error fetching logs', error);
    }
}

// Auto-fill slug from title
document.getElementById('blog-title').addEventListener('input', (e) => {
    if (!isEditing) {
        const slug = e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        document.getElementById('blog-slug').value = slug;
    }
});

// Live Preview Logic
function setupLivePreview() {
    const titleInput = document.getElementById('blog-title');
    const authorInput = document.getElementById('blog-author');
    const subHeadingInput = document.getElementById('blog-subheading');
    const contentInput = document.getElementById('blog-content');
    const imageInput = document.getElementById('blog-image');
    const iframe = document.getElementById('blog-preview-iframe');

    if (!iframe) return;

    const getPreviewEl = (selector) => {
        return iframe.contentDocument ? iframe.contentDocument.querySelector(selector) : null;
    };

    titleInput.addEventListener('input', () => {
        const el = getPreviewEl('#preview-title');
        if (el) el.innerText = titleInput.value || 'Blog Title Preview';
    });

    authorInput.addEventListener('input', () => {
        const el = getPreviewEl('#preview-author');
        if (el) el.innerText = authorInput.value || 'Admin';
    });

    contentInput.addEventListener('input', () => {
        const el = getPreviewEl('#preview-content');
        if (el) el.innerHTML = contentInput.value || '<p>Start typing...</p>';
    });

    imageInput.addEventListener('change', () => {
        const file = imageInput.files[0];
        const previewContainer = getPreviewEl('#preview-image-container');
        const previewImg = getPreviewEl('#preview-image');

        if (file && previewImg) {
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImg.src = e.target.result;
                if (previewContainer) previewContainer.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else if (previewContainer) {
            previewContainer.style.display = 'none';
        }
    });

    subHeadingInput.addEventListener('input', () => {
        const el = getPreviewEl('#preview-subheading');
        if (el) el.innerText = subHeadingInput.value;
    });

    iframe.onload = () => {
        titleInput.dispatchEvent(new Event('input'));
        authorInput.dispatchEvent(new Event('input'));
        subHeadingInput.dispatchEvent(new Event('input'));
        contentInput.dispatchEvent(new Event('input'));

        const dateBlock = getPreviewEl('.blog-read-time-block');
        if (dateBlock) {
            const dateOpts = { year: 'numeric', month: 'long', day: 'numeric' };
            const today = new Date().toLocaleDateString('en-US', dateOpts);
            dateBlock.innerHTML = `<p class="blog-info-text">${today}</p>`;
        }

        const existingImg = document.getElementById('image-preview');
        const previewImg = getPreviewEl('#preview-image');
        const previewContainer = getPreviewEl('#preview-image-container');

        if (existingImg && existingImg.src && existingImg.style.display !== 'none' && previewImg) {
            previewImg.src = existingImg.src;
            if (previewContainer) previewContainer.style.display = 'block';
        }
    };
}

document.addEventListener('DOMContentLoaded', setupLivePreview);

init();

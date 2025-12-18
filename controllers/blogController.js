const { readData, writeData } = require('../utils/jsonDb');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up Multer Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'public/uploads/';
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5000000 },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|webp|gif/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb('Error: Images Only!');
        }
    }
}).single('featuredImage');

const getBlogs = async (req, res) => {
    const blogs = readData('blogs');
    const publishedBlogs = blogs.filter(b => b.status === 'published').sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    res.json(publishedBlogs);
};

const getBlogBySlug = async (req, res) => {
    const blogs = readData('blogs');
    const blog = blogs.find(b => b.slug === req.params.slug && b.status === 'published');
    if (blog) {
        res.json(blog);
    } else {
        res.status(404).json({ message: 'Blog not found' });
    }
};

const getAllBlogsAdmin = async (req, res) => {
    const blogs = readData('blogs');
    const sortedBlogs = blogs.sort((a, b) => new Date(b.publishedAt || b.createdAt) - new Date(a.publishedAt || a.createdAt));
    res.json(sortedBlogs);
};

const createBlog = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err });
        }

        const { title, slug, description, content, author, status, publishedAt } = req.body;

        let featuredImage = '';
        if (req.file) {
            featuredImage = `/public/uploads/${req.file.filename}`;
        }

        const newBlog = {
            _id: Date.now().toString(),
            title,
            slug,
            description,
            content,
            featuredImage,
            author,
            status,
            publishedAt: publishedAt || new Date().toISOString(),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        const blogs = readData('blogs');
        writeData('blogs', [newBlog, ...blogs]);

        res.status(201).json(newBlog);
    });
};

const updateBlog = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err });
        }

        const { title, slug, description, content, author, status, publishedAt } = req.body;
        const blogs = readData('blogs');
        const blogIndex = blogs.findIndex(b => b._id === req.params.id);

        if (blogIndex !== -1) {
            const blog = blogs[blogIndex];

            const updatedBlog = {
                ...blog,
                title: title || blog.title,
                slug: slug || blog.slug,
                description: description || blog.description,
                content: content || blog.content,
                author: author || blog.author,
                status: status || blog.status,
                publishedAt: publishedAt || blog.publishedAt,
                updatedAt: new Date().toISOString()
            };

            if (req.file) {
                updatedBlog.featuredImage = `/public/uploads/${req.file.filename}`;
            }

            blogs[blogIndex] = updatedBlog;
            writeData('blogs', blogs);

            res.json(updatedBlog);
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    });
};

const deleteBlog = async (req, res) => {
    const blogs = readData('blogs');
    const newBlogs = blogs.filter(b => b._id !== req.params.id);

    if (blogs.length === newBlogs.length) {
        res.status(404).json({ message: 'Blog not found' });
    } else {
        writeData('blogs', newBlogs);
        res.json({ message: 'Blog removed' });
    }
};

module.exports = {
    getBlogs,
    getBlogBySlug,
    getAllBlogsAdmin,
    createBlog,
    updateBlog,
    deleteBlog
};

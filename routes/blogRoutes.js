const express = require('express');
const router = express.Router();
const {
    getBlogs,
    getBlogBySlug,
    getAllBlogsAdmin,
    createBlog,
    updateBlog,
    deleteBlog
} = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');

// Public Routes
router.get('/', getBlogs);
router.get('/:slug', getBlogBySlug);

// Admin Routes
router.get('/admin/all', protect, getAllBlogsAdmin);
router.post('/', protect, createBlog);
router.put('/:id', protect, updateBlog);
router.delete('/:id', protect, deleteBlog);

module.exports = router;

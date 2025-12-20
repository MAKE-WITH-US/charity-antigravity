const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configuration Endpoint
app.get('/api/config', (req, res) => {
    res.json({
        razorpayKeyId: process.env.RAZORPAY_KEY_ID
    });
});

// Admin Panel Route
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/admin/index.html'));
});

// Serve Single Blog Template for all blog post routes
app.get('/blog-post/:slug', (req, res) => {
    res.sendFile(path.join(__dirname, 'blog-post/charity-meals-that-change-the-lives-every-day.html'));
});

// Root fallback (handled by vercel.json routes normally)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.htm'));
});

// Fallback for other HTML files hit via direct URL
app.get('/:page', (req, res) => {
    const page = req.params.page;
    if (page.endsWith('.html') || page.endsWith('.htm')) {
        res.sendFile(path.join(__dirname, page), (err) => {
            if (err) res.status(404).send('Page not found');
        });
    } else {
        res.status(404).send('Page not found');
    }
});

// For local testing
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve specific static folders from root to support existing frontend structure
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/ajax', express.static(path.join(__dirname, 'ajax')));
app.use('/gsap', express.static(path.join(__dirname, 'gsap')));
app.use('/fonts', express.static(path.join(__dirname, 'fonts')));

// Serve the Webflow folders
app.use('/68abe6343889f23ffa0aeb59', express.static(path.join(__dirname, '68abe6343889f23ffa0aeb59')));
app.use('/68ad3e12591a81fed1f9da20', express.static(path.join(__dirname, '68ad3e12591a81fed1f9da20')));

// Configuration Endpoint (Securely serve public keys)
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

// Frontend Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.htm'));
});

app.get('/index.htm', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.htm'));
});

// Fallback for other HTML files
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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const { readData, writeData } = require('../utils/jsonDb');
const FileLog = require('../models/FileLog');
const path = require('path');
const fs = require('fs');

// Ensure upload directory exists
const uploadDir = path.join(__dirname, '../public/uploads/files');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const sendFile = async (req, res) => {
    try {
        const { patientName, phoneNumber, email } = req.body;

        // Handle File
        let filePath = '';
        if (req.file) {
            filePath = `/uploads/files/${req.file.filename}`;
        } else {
            return res.status(400).json({ message: 'File is required' });
        }

        // Create Log
        const newLog = new FileLog(patientName, phoneNumber, email, filePath);

        // Save to DB
        const logs = readData('file-logs');
        logs.unshift(newLog); // Add to beginning
        writeData('file-logs', logs);

        // MOCK SEND: In a real app, we would trigger email/SMS here.
        console.log(`[MOCK SEND] Sending ${filePath} to ${email} / ${phoneNumber}`);

        res.status(201).json({
            message: 'File sent successfully!',
            log: newLog
        });

    } catch (error) {
        console.error('Send file error:', error);
        res.status(500).json({ message: 'Server error sending file' });
    }
};

const getLogs = async (req, res) => {
    try {
        const logs = readData('file-logs');
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: 'Server error fetching logs' });
    }
};

module.exports = { sendFile, getLogs };

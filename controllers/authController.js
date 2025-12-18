const { readData, writeData } = require('../utils/jsonDb');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const users = readData('users');

    try {
        const user = users.find(u => u.username === username);

        if (user && (await bcrypt.compare(password, user.password))) {
            res.json({
                _id: user._id,
                username: user.username,
                token: generateToken(user._id)
            });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const registerUser = async (req, res) => {
    const { username, password } = req.body;
    const users = readData('users');

    try {
        if (users.find(u => u.username === username)) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = {
            _id: Date.now().toString(),
            username,
            password: hashedPassword
        };

        const updatedUsers = [...users, newUser];
        writeData('users', updatedUsers);

        res.status(201).json({
            _id: newUser._id,
            username: newUser.username,
            token: generateToken(newUser._id)
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { loginUser, registerUser };

const fs = require('fs');
const path = require('path');

const getDataPath = (collection) => path.join(__dirname, `../data/${collection}.json`);

const readData = (collection) => {
    const filePath = getDataPath(collection);
    if (!fs.existsSync(filePath)) {
        // Initialize empty array if file doesn't exist
        fs.writeFileSync(filePath, JSON.stringify([]));
        return [];
    }
    const jsonData = fs.readFileSync(filePath);
    try {
        return JSON.parse(jsonData);
    } catch (e) {
        return [];
    }
};

const writeData = (collection, data) => {
    const filePath = getDataPath(collection);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = { readData, writeData };

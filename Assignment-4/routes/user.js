const express = require("express");
const router = express.Router();
const path = require("path");

// Define routes
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'home.html'));
});

router.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'about.html'));
});

module.exports = router;
const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "GenAI Farm Decision Support System API"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "Backend is running"
    });
});

module.exports = app;
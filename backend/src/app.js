const express = require('express');

const farmRoutes = require("./routes/farmRoutes");

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

app.use("/api/farms", farmRoutes);

module.exports = app;
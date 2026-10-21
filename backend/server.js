const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(express.static(require("path").join(__dirname, "..")));

app.get("/api/test", (req, res) => {
    res.json({
        message: "SkillSync API is working!",
        status: "success"
    });
});

app.listen(PORT, () => {
    console.log(`SkillSync server running at http://localhost:${PORT}`);
});
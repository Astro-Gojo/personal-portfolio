const express = require("express");
const path = require("path");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

// MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Goku@17F101uT",
    database: "portfolio_db"
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log("MySQL Connection Error:");
        console.log(err);
    } else {
        console.log("Connected to MySQL!");
    }
});

// Serve static files
app.use(express.static("public"));

// Homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API route to fetch projects
app.get("/projects", (req, res) => {

    const sql = "SELECT * FROM projects";

    db.query(sql, (err, results) => {

        if (err) {
            res.status(500).send(err);
        }
        else {
            res.json(results);
        }

    });

});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
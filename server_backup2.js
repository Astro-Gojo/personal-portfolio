require("dotenv").config();
console.log(process.env.MONGO_URI);

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

const PORT = 3000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Connected to MongoDB!");
})
.catch((err) => {
    console.log("MongoDB Connection Error:");
    console.log(err);
});

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
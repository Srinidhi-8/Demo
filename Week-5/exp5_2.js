const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Welcome to SVECW Express Server!");
});
app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is: ${userId}`);
});
app.get("/student/:name/:id", (req, res) => {
    const name = req.params.name;
    const id = req.params.id;
    res.send(`Student Name: ${name}<br>Student ID: ${id}`);
});
app.get("/search", (req, res) => {
    const name = req.query.name;
    res.send(`Search result for: ${name}`);
});
app.get("/products", (req, res) => {
    const category = req.query.category;
    const price = req.query.price;
    res.send(`Product Category: ${category}<br>Maximum Price: ${price}`);
});
app.get("/course/:course", (req, res) => {
    const course = req.params.course;
    const year = req.query.year;
    res.send(`Course: ${course}<br>Year: ${year}`);
});
app.listen(PORT, () => {
    console.log(`Success! Server is running at http://localhost:${PORT}`);
    console.log("Press Ctrl+C to stop server.");
});

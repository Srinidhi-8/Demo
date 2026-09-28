const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

// Create Cookie
app.get("/create-cookie", (req, res) => {
    res.cookie("username", "Srinidhi");
    res.send("Cookie created successfully!");
});

// Read Cookie
app.get("/read-cookie", (req, res) => {
    const username = req.cookies.username;

    if (username) {
        res.send("Cookie value: " + username);
    } else {
        res.send("Cookie not found!");
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

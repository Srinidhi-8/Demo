const express = require("express");
const session = require("express-session");

const app = express();

// Session middleware
app.use(
    session({
        secret: "my-secret-key",
        resave: false,
        saveUninitialized: true
    })
);

// Create and maintain session
app.get("/login", (req, res) => {

    req.session.username = "Srinidhi";

    res.send("Session created successfully!");
});

// Read session
app.get("/profile", (req, res) => {

    if (req.session.username) {
        res.send("Welcome " + req.session.username);
    } else {
        res.send("No session found!");
    }
});

// Destroy session
app.get("/logout", (req, res) => {

    req.session.destroy((err) => {

        if (err) {
            res.send("Unable to logout");
        } else {
            res.send("Session destroyed successfully!");
        }

    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

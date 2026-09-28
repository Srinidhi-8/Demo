const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(
    session({
        secret: "private-route-secret",
        resave: false,
        saveUninitialized: false
    })
);

// Login page
app.get("/login", (req, res) => {

    res.send(`
        <h1>Login</h1>

        <form method="POST" action="/login">

            <label>Username:</label>
            <input type="text" name="username" required>

            <br><br>

            <label>Password:</label>
            <input type="password" name="password" required>

            <br><br>

            <button type="submit">Login</button>

        </form>

        <p>Username: student</p>
        <p>Password: 1234</p>
    `);
});

// Login
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    if (username === "student" && password === "1234") {

        req.session.username = username;

        res.redirect("/dashboard");

    } else {

        res.send(`
            <h2>Invalid Username or Password</h2>
            <a href="/login">Try Again</a>
        `);
    }
});

// Protected private route
app.get("/dashboard", (req, res) => {

    if (!req.session.username) {

        return res.send(`
            <h2>Access Denied!</h2>
            <p>Please login to access the private page.</p>
            <a href="/login">Login</a>
        `);

    }

    res.send(`
        <h1>Private Dashboard</h1>

        <p>Welcome ${req.session.username}</p>

        <p>You are authorized to view this page.</p>

        <a href="/logout">Logout</a>
    `);
});

// Logout
app.get("/logout", (req, res) => {

    req.session.destroy((err) => {

        if (err) {
            res.send("Logout failed!");
        } else {
            res.redirect("/login");
        }

    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

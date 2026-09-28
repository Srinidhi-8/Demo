const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.urlencoded({ extended: true }));

// Session
app.use(
    session({
        secret: "login-secret",
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

// Login process
app.post("/login", (req, res) => {

    const { username, password } = req.body;

    if (username === "student" && password === "1234") {

        req.session.username = username;

        res.send(`
            <h2>Login Successful!</h2>
            <p>Welcome ${username}</p>
            <a href="/logout">Logout</a>
        `);

    } else {

        res.send(`
            <h2>Invalid Username or Password</h2>
            <a href="/login">Try Again</a>
        `);

    }
});

// Logout
app.get("/logout", (req, res) => {

    req.session.destroy((err) => {

        if (err) {
            res.send("Logout failed!");
        } else {
            res.send(`
                <h2>Logout Successful!</h2>
                <a href="/login">Login Again</a>
            `);
        }

    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

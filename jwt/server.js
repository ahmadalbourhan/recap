// require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const users = [{ id: 1, username: "ahmad", password: "12345" }];

// Secret key (store securely)
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

// Middleware to Verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token.split(" ")[1], SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.user = decoded;
    next();
  });
};

// Login Route - Generate JWT
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  // Generate JWT
  const token = jwt.sign(
    { id: user.id, username: user.username, role: "admin" },
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ token });
});

// Logout endpoint (removes JWT token stored in cookie)
app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
  }); // Removes the JWT cookie
  res.json({ message: "You have logged out successfully!" });
});

// Protected Route
app.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}, you have access!` });
});

app.get("/admin", verifyToken, (req, res) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Access denied" });
  res.json({ message: "Welcome, Admin!" });
});

app.get("/", (req, res) => {
  res.send("Hello, from server");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const cors = require("cors");
const db = require("./db.js");

const app = express();
app.use(cors());
app.use(express.json());

// GET all users
app.get("/users", (req, res) => {
  const sql = "SELECT * FROM curdtable";
  db.query(sql, (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows);
  });
});

// GET user by ID
app.get("/users/:id", (req, res) => {
  const sql = "SELECT * FROM curdtable WHERE id=?";
  db.query(sql, [req.params.id], (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows[0]);
  });
});

// ADD user
app.post("/users", (req, res) => {
  const { name, company, role, verified, status } = req.body;
  const sql = "INSERT INTO curdtable (name, company, role, verified, status) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name, company, role, verified, status], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ id: result.insertId });
  });
});

// DELETE user
app.delete("/users/:id", (req, res) => {
  const sql = "DELETE FROM curdtable WHERE id=?";
  db.query(sql, [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User Deleted" });
  });
});

// TEST route
app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

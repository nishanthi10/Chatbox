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

app.put("/users/:id", (req, res) => {
  const { name, company, role, verified, status } = req.body;
  const sql = "UPDATE curdtable SET name=?, company=?, role=?, verified=?, status=? WHERE id=?";

  db.query(sql, [name, company, role, verified, status, req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User Updated" });
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

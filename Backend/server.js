const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin123",
  database: "car_services_db"
});

// Connect
db.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL ✅");
  }
});

// Test route
app.get("/", (req, res) => {
  res.send("Backend running...");
});

// Signup API
app.post("/signup", (req, res) => {
  const {
    first_name,
    last_name,
    email,
    password,
    role,
    phone,
    gender,
    marital_status,
    dob,
    job,
    // Role specific
    address,
    vehicle_type,
    staff_id,
    education_level,
    specialization,
    institution
  } = req.body;

  // Create table first if not exists
  const createTableSQL = `
    CREATE TABLE IF NOT EXISTS users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      first_name VARCHAR(100),
      last_name VARCHAR(100),
      email VARCHAR(100) UNIQUE,
      password VARCHAR(255),
      role VARCHAR(50),
      phone VARCHAR(20),
      gender VARCHAR(10),
      marital_status VARCHAR(20),
      dob DATE,
      job VARCHAR(100),
      address TEXT,
      vehicle_type VARCHAR(100),
      staff_id VARCHAR(50),
      education_level VARCHAR(100),
      specialization VARCHAR(100),
      institution VARCHAR(100),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  db.query(createTableSQL, (err) => {
    if (err) {
      console.error("Table creation error:", err);
    }
  });

  const sql = `
    INSERT INTO users 
    (first_name, last_name, email, password, role, phone, gender, marital_status, dob, job, address, vehicle_type, staff_id, education_level, specialization, institution)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    first_name,
    last_name,
    email,
    password,
    role,
    phone,
    gender,
    marital_status,
    dob,
    job,
    address,
    vehicle_type,
    staff_id,
    education_level,
    specialization,
    institution
  ], (err, result) => {
    if (err) {
      console.error("Signup error:", err);
      return res.status(500).json({ 
        success: false, 
        message: "Registration failed", 
        error: err.message 
      });
    }
    res.json({ 
      success: true, 
      message: "User registered successfully ✅",
      userId: result.insertId
    });
  });
});

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error("Login error:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }

    if (results.length > 0) {
      const user = results[0];

      res.json({
        success: true,
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          name: user.first_name,
          first_name: user.first_name,
          last_name: user.last_name,
          phone: user.phone,
          job: user.job
        }
      });
    } else {
      res.json({
        success: false,
        message: "Invalid email or password"
      });
    }
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
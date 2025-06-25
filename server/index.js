require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
console.log("MONGO_URI =", process.env.MONGO_URI);

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

// Routes (we'll add them later)
app.get("/", (req, res) => {
  res.send("🚀 SkillSwap API is running...");
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

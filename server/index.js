require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const skillRoutes = require("./routes/skillRoutes");

const app = express();
console.log("MONGO_URI =", process.env.MONGO_URI);

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/skills", skillRoutes);

app.get("/", (req, res) => {
  res.send("🚀 SkillSwap API is running...");
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

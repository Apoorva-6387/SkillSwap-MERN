const express = require("express");
const router = express.Router();
const { createSkill, getAllSkills } = require("../controllers/skillController");
const protect = require("../middleware/authMiddleware");

router.post("/", protect, createSkill);   
router.get("/", getAllSkills);           

module.exports = router;

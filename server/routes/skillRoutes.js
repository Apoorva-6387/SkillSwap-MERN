const express = require("express");
const router = express.Router();
const {
  createSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
} = require("../controllers/skillController");
const protect = require("../middleware/authMiddleware");

router.post("/", protect, createSkill);            
router.get("/", getAllSkills);                     

router.put("/:id", protect, updateSkill);            
router.delete("/:id", protect, deleteSkill);        

module.exports = router;

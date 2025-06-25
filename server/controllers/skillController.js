const SkillPost = require("../models/SkillPost");

const createSkill = async (req, res) => {
  const { title, description, category, tags } = req.body;

  try {
    const skill = await SkillPost.create({
      user: req.user._id, 
      title,
      description,
      category,
      tags,
    });

    res.status(201).json(skill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllSkills = async (req, res) => {
  try {
    const skills = await SkillPost.find().populate("user", "name email");
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createSkill, getAllSkills };

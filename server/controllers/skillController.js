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

const updateSkill = async (req, res) => {
  try {
    const skill = await SkillPost.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({ msg: "Skill post not found" });
    }
    if (skill.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ msg: "Not authorized to update this post" });
    }

    const updatedSkill = await SkillPost.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedSkill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteSkill = async (req, res) => {
  try {
    const skill = await SkillPost.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({ msg: "Skill post not found" });
    }

    if (skill.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ msg: "Not authorized to delete this post" });
    }

    await skill.deleteOne();

    res.json({ msg: "Skill post deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createSkill,
  getAllSkills,
  updateSkill,
  deleteSkill,
};


const Message = require("../models/message");

const sendMessage = async (req, res) => {
  const { to, skill, text } = req.body;
  try {
    const newMsg = await Message.create({
      from: req.user._id,
      to,
      skill,
      text
    });
    res.status(201).json(newMsg);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMessagesForUser = async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [{ from: req.user._id }, { to: req.user._id }]
    }).populate("from to skill", "name title");
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { sendMessage, getMessagesForUser };


const express = require("express");
const router = express.Router();
const { sendMessage, getMessagesForUser } = require("../controllers/messageController");
const authMiddleware = require("../middleware/authMiddleware");


router.post("/", authMiddleware, sendMessage);
router.get("/", authMiddleware, getMessagesForUser);

module.exports = router;

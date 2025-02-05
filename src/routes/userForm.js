const express = require("express");
const UserForm = require("../models/UserForm.js");
const router = express.Router();
const axios = require("axios");

// Роут для створення нового користувача та відправки повідомлення в Telegram
router.post("/register", async (req, res) => {
  try {
    const { name, email, phone, date, project } = req.body;

    // Створення нового користувача
    const newUser = new UserForm({ name, email, phone, date, project });
    await newUser.save();

    // Відправляємо повідомлення в Telegram через axios
    const telegramMessage = `
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Date: ${date}
      Project: ${project}
    `;
    await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`,
      {
        chat_id: process.env.CHAT_IDS,
        text: telegramMessage,
      },
    );

    res.status(201).json({
      message:
        "Користувача створено успішно, повідомлення надіслано в Telegram і email",
    });
  } catch (error) {
    console.error(
      "Помилка при створенні користувача або відправленні повідомлення:",
      error,
    );
  }
});

module.exports = router;

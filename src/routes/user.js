const express = require("express");
const router = express.Router();
const UserForm = require("../models/UserForm");

router.get("/", async (req, res) => {
  try {
    let sortByDate = req.query.sortByDate || "desc";

    const users = await UserForm.find().sort({
      createdAt: sortByDate === "desc" ? -1 : 1,
    });

    res.json(users);
  } catch (error) {
    console.error("Помилка при отриманні користувачів:", error);
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { name, email, phone, date, project, done, cancel } = req.body;
    const updatedUser = await UserForm.findByIdAndUpdate(
      _id,
      { name, email, phone, date, project, done, cancel },
      { new: true },
    );
    if (!updatedUser) {
      return res.status(409).json({ message: "Користувач не знайдено" });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error("Помилка при оновленні користувача:", error);
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const deletedUser = await UserForm.findByIdAndDelete(_id);
    if (!deletedUser) {
      return res.status(409).json({ message: "Користувач не знайдено" });
    }
    res.json({ message: "Користувач видалено успішно" });
  } catch (error) {
    console.error("Помилка при видаленні користувача:", error);
  }
});

module.exports = router;

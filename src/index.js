require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db/db.js");
const userFormRoutes = require("./routes/userForm.js");
const userRoutes = require("./routes/user.js");

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("API Backend SynerTech!");
});
app.use("/form", userFormRoutes);
app.use("/users", userRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server is running on port http://localhost:${process.env.PORT || 3000}`,
  );
});

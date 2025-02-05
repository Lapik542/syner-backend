const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(
    process.env.MONGODB_URI ||
      "mongodb+srv://Alex_Gavrish:IKc0xvjnoOshP9Vp@cluster0.sdvypro.mongodb.net/syner?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("DB connecting");
};

module.exports = { connectDB };

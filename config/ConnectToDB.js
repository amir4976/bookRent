require("dotenv").config();
const mongoose = require("mongoose");

const ConnectToDB = async () => {
  try {
    const uri = process.env.MONGOO_URI;
    if (!uri) throw new Error("DATABASE_URI IS NOT DEFINED");
    await mongoose.connect(uri);
    console.log("connected ✔✔✨");
  } catch (err) {
    console.log("mongoose not connected becouse :", err.massage);
    process.exit(1);
  }
};
module.exports = ConnectToDB;

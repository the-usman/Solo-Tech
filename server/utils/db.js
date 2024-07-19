const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

const connectdb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error");
    process.exit(0);
  }

};

module.exports = connectdb;

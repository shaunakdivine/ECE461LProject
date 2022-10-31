const config = require('../config.json');
const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    projectIds: [Number],
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);

mongoose
  .connect(config.MONGO_URL, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch(e => console.log(e));

module.exports = {
  USER_COLLECTION: mongoose.model("UserInfo")
};
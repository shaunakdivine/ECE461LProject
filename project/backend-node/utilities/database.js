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

const checkedInSchema = new mongoose.Schema(
  {
    userID: {type: Number, unique: true},
    amount: Number,
  }
);

mongoose.model("CheckedIn", checkedInSchema);

const hwSchema = new mongoose.Schema(
  {
    id: {type: Number, unique: true},
    Name: String,
    checkedIn: [checkedInSchema],
  }
);

mongoose.model("HW", hwSchema);

const ProjectInfo1 = new mongoose.Schema(
  {
    projectId: {type: Number,unique: true},
    name: String,
    description: String, 
    hardwares: [hwSchema],
  },
  {
    collection: "ProjectInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);
mongoose.model("ProjectInfo", ProjectInfo1);

mongoose
  .connect(config.MONGO_URL, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch(e => console.log(e));

module.exports = {
  USER_COLLECTION: mongoose.model("UserInfo"),
  PROJECT_COLLECTION: mongoose.model("ProjectInfo")
};
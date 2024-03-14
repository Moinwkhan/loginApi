const model = require("../models/model");

const Userlogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await model.User.findOne({ username, password });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).json({
      userId: user._id,
      name: user.name,
      message: "User Found",
    });
    console.log(user._id);
    console.log("User Found");
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const UserSingin = async (req, res) => {
  try {
    const newUser = new model.User(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      name: newUser.name,
      message: "User Signup",
    });
    console.log("User Signup");
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const GetUserSingin = async (req, res) => {
  try {
    const users = await model.User.find();
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json({ users });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const GetDataForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await model.Transaction.find({ user: userId });
    res.status(200).json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const AddDataForUser = async (req, res) => {
  try {
    const newData = new model.Transaction({
      ...req.body,
      user: req.params.userId,
    });
    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  Userlogin,
  UserSingin,
  GetDataForUser,
  AddDataForUser,
  GetUserSingin,
};

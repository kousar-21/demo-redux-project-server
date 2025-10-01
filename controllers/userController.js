const User = require('../models/User')
// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email} = req.body;
    const newUser = new User({ name, email});
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {createUser,getUsers} ;
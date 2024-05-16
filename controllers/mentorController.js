// mentorController.js

const Mentor = require('../models/mentor');

// Controller function to create a new mentor
exports.createMentor = async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(201).json(mentor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller function to get all mentors
exports.getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to get a specific mentor by ID
exports.getMentorById = async (req, res) => {
  res.json(res.mentor);
};

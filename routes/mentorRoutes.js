// mentorRoutes.js

const express = require('express');
const router = express.Router();
const Mentor = require('../models/mentor');
   
// Route to create a new mentor
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    
    // Check if mentor with the provided email already exists
    const existingMentor = await Mentor.findOne({ email });
    if (existingMentor) {
      return res.status(400).json({ message: 'Mentor with this email already exists' });
    }
    
    // If mentor with the email does not exist, create a new mentor
    const mentor = new Mentor({ name, email });
    await mentor.save();
    res.status(201).json(mentor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to get all mentors
router.get('/', async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get a specific mentor by ID
router.get('/:id', getMentor, (req, res) => {
  res.json(res.mentor);
});

// Middleware function to get a mentor by ID from the database
async function getMentor(req, res, next) {
  let mentor;
  try {
    mentor = await Mentor.findById(req.params.id);
    if (mentor == null) {
      return res.status(404).json({ message: 'Mentor not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.mentor = mentor;
  next();
}

module.exports = router;

const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Route to create a new student
router.post('/', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to get all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get all students assigned to a specific mentor by mentor ID
router.get('/mentor', async (req, res) => {
  try {
    const mentorId = req.query.id; 
    const students = await Student.find({ mentor: mentorId }); 
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to update details of a specific student by ID
router.put('/:id', getStudent, async (req, res) => {
  try {
    res.student.name = req.body.name;
    res.student.email = req.body.email;
    res.student.mentor = req.body.mentor; 
    await res.student.save();
    res.json(res.student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Route to get a specific student by ID
router.get('/:id', getStudent, (req, res) => {
  res.json(res.student);
});

// Middleware function to get a student by ID from the database
async function getStudent(req, res, next) {
  let student;
  try {
    student = await Student.findById(req.params.id);
    if (student == null) {
      return res.status(404).json({ message: 'Student not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.student = student;
  next();
}

module.exports = router;

// assignmentController.js

const Student = require('../models/Student');
const Mentor = require('../models/mentor');

// Controller function to assign a student to a mentor
exports.assignStudentToMentor = async (req, res) => {
  try {
    const { studentId, mentorId } = req.body;
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ message: 'Mentor not found' });
    }
    student.mentor = mentorId;
    await student.save();
    res.status(200).json({ message: 'Student assigned to mentor successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

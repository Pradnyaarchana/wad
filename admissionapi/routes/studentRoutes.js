const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

// GET all students
router.get("/students", getAllStudents);

// POST a new student
router.post("/students", createStudent);

// PUT (update) student by ID
router.put("/students/:id", updateStudent);

// DELETE a student by ID
router.delete("/students/:id", deleteStudent);

module.exports = router;

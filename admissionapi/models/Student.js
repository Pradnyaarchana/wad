const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  course: String,
  status: String // e.g., "pending", "approved", "rejected"
});

module.exports = mongoose.model("Student", studentSchema);

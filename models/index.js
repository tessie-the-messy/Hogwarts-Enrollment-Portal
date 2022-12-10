// require models (e.g. Student, Subject, Teacher)
const Student = require("./Student");
const Teacher = require("./Teacher");
const Subject = require("./Subject");
const Roster = require("./Roster");

// Associations
Subject.belongsTo(Teacher, {
  foreignKey: "teacher_id",
});

Teacher.hasOne(Subject, {
  foreignKey: "teacher_id",
  onDelete: "CASCADE",
});
Roster.belongsTo(Subject, {
  foreignKey: "subject_id",
});

Roster.hasMany(Student, {
  foreignKey: "student_id",
  onDelete: "CASCADE",
});

// Export module
module.exports = { Student, Teacher, Subject, Roster };

// require models (e.g. Student, Subject, Teacher)
const Student = require("./Student");
const Teacher = require("./Teacher");
const Subject = require("./Subject");
const Roster = require("./Roster");
const House = require("./House");

// Associations

House.hasMany(Student, {
  foreignKey: "house_id",
  onDelete: "CASCADE",
});

Student.belongsTo(House, {
  foreignKey: "house_id",
});

Teacher.hasMany(Student, {
  foreignKey: "teacher_id",
});

Student.belongsTo(Teacher, {
  foreignKey: "teacher_id",
});

House.hasMany(Teacher, {
  foreignKey: "house_id",
  onDelete: "CASCADE",
});

Teacher.belongsTo(House, {
  foreignKey: "house_id",
});

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
  foreignKey: "id",
  onDelete: "CASCADE",
});

// Export module
module.exports = { Student, Teacher, Subject, Roster, House };

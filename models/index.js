// require models (e.g. Student, Subject, Teacher)
const Student = require('./Student');
const Teacher = require('./Teacher');
const Subject = require('./Subject');
const Roster = require ('./Roster');

// Associations
Subject.belongsTo(Teacher, {
    foreignKey: 'teacher_id'
});

Teacher.belongsTo(Subject, {
    foreignKey: 'subject_id'
});

Roster.belongsTo(Subject, {
    foriegnKey: 'subject_id'
});

Roster.hasMany (Student, {
    foriegnKey: 'student_id'
});

// Export module
module.exports = {Student, Teacher, Subject, Roster}
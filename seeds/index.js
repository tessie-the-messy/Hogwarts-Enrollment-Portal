const sequelize = require("../config/connection");
const { Teacher, Subject, House } = require("../models");

const teacherData = require("./teacherData.json");
const subjectData = require("./subjectData.json");
const houseData = require("./houseData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const teacher = await Teacher.bulkCreate(teacherData, {
    individualHooks: true,
    returning: true,
  });

  const subject = await Subject.bulkCreate(subjectData, {
    individualHooks: true,
    returning: true,
  });

  const house = await House.bulkCreate(houseData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

const sequelize = require("../config/connection");
const { Teacher } = require("../models");

const teacherData = require("./teacherData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const teacher = await Teacher.bulkCreate(teacherData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();

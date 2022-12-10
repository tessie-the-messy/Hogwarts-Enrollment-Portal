// requirements, consistent among all models (besides index)
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//
class Subject extends Model {}

// Subject.init => id, name, teacher_id(FK)
Subject.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    subject_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "teacher",
        key: "id",
      },
    },
  },
  {
    // ????????????????????????????????
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "subject",
  }
);

module.exports = Subject;

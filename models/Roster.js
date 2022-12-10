// requirements, consistent among all models (besides index)
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//
class Roster extends Model {}

// Roster.init => id, class_id(FK), (HAS MANY) student_id(FK)
Roster.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    subject_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "subject",
        key: "id",
      },
    },
    student_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "student",
        key: "id",
      },
    },
  },
  {
    // ????????????????????????????????
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "roster",
  }
);

module.exports = Roster;

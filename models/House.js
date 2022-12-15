const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class House extends Model {}

House.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    house_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    file_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    house_head: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // ????????????????????????????????
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "house",
  }
);

module.exports = House;

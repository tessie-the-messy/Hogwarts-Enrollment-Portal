// requirements, consistent among all models (besides index)
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//
class Teacher extends Model {}

// Teacher.init => id, name, subject_id(FK),background, head of house(boolean)
Teacher.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      teacher_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      background: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      headofhouse: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      subject_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'subject',
            key: 'id',
          },
      },
    },
    {
        // ????????????????????????????????
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'teacher',
    }
  );

module.exports = Teacher;

    


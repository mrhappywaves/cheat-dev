const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class HTML extends Model {}

HTML.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    definition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    example: {
      type: DataTypes.STRING,
      allowNull: false
    },
    topic_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'topic',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'html',
  }
);

module.exports = HTML;

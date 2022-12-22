const { sequelize } = require("../db");
const { Sequelize, DataTypes } = require("sequelize");
const Item = sequelize.define("items", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = { Item };

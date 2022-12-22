const { sequelize } = require("../db");
const { Sequelize } = require("sequelize");
const Sauce = sequelize.define("sauces", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = { Sauce };

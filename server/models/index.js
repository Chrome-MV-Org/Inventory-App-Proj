const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");
const { Sauce } = require("./Sauce");

module.exports = {
  db: sequelize,
  Sauce,
};

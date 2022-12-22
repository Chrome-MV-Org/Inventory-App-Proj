const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");
const { Sauce } = require("./Sauce");

const {Item} = require("./Item")

module.exports = {
  db: sequelize,
  Item
};
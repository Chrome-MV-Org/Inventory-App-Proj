const express = require("express");
const router = express.Router();
const { Sauce } = require("../models/Sauce");
const { check, validationResult } = require("express-validator");

// app.use(express.json());

// Express route to get all sauce items
router.get("/", async (req, res, next) => {
  try {
    console.log("we are here");
    const sauces = await Sauce.findAll();
    res.send(sauces);
  } catch (error) {
    next(error);
  }
});

//Express route to get one sauce item by its Id
router.get("/:id", async (req, res, next) => {
  try {
    const sauce = await Sauce.findByPk(req.params.id);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

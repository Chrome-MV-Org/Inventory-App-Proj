const express = require("express");
const router = express.Router();
const { Item } = require("../models/Item");
const { check, validationResult } = require("express-validator");

// GET All items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

//Express route to get one sauce item by its Id
router.get("/:id", async (req, res, next) => {
  try {
    const item = await Sauce.findByPk(req.params.id);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

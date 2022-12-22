const express = require("express");
const router = express.Router();
const { Item } = require("../models/Item");
const { check, validationResult } = require("express-validator");

// GET All sauce
router.get("/", async (req, res) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

//

module.exports = router;

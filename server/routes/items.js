const express = require("express");
const router = express.Router();
const { Item } = require("../models/Item");


// GET All items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// update an item
router.put("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    const updated = await item.update(req.body);
    res.send(updated);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

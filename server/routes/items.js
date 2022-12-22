const express = require("express");
const router = express.Router();
const { Item } = require("../models/Item");
// const { check, validationResult } = require("express-validator");

// GET All items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    next(error);
  }
});
// // post an item 
router.post('/', async (req,res,next)=> {
  try{
    const item = await Item.create({ 
      title: req.body.title,
      price:req.body.price,
      description: req.body.description,
      category:req.body.category,
      image:req.body.image
    })
    res.json(item)
  } catch (error) {
    next(error);
  }
})
 


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

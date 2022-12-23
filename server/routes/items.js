const express = require("express");
const router = express.Router();
const { Item } = require("../models/Item");


// GET All items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

//get one item
router.get("/:id", async (req,res)=>{
    res.json(await Item.findByPk(req.params.id))
})
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


//delete an item
router.delete("/:id", async (req, res) => {
  await Item.destroy({ where: { id: req.params.id } });
  const deletedItem = await Item.findAll();
  res.json(deletedItem);
});

module.exports = router;

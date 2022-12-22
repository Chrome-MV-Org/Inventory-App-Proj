const express = require("express");
const router = express.Router();

router.use("/sauces", require("./sauces"));
router.use("/items", require("./items"));
module.exports = router;

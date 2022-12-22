const express = require("express");
const router = express.Router();

router.use("/sauces", require("./sauces"));
module.exports = router;

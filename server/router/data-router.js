const express = require("express");
const router = express.Router();
const {getDatas} = require("../controllers/data-controller");

router.route("/data").get(getDatas);

module.exports = router;
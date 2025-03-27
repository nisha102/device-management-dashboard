const express = require("express");
const router = express.Router();
const { getDevices } = require("../controllers/deviceController");

router.get("/", getDevices);

module.exports = router;

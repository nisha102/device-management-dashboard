const express = require("express");
const router = express.Router();
const { getAllDevices } = require("../controllers/deviceController");

router.get("/devices", getAllDevices);

router.post("/devices/:id/actions/update-apn", (req, res) => {
  const { id } = req.params;
  console.log(`APN update triggered for device ID: ${id}`);
  return res.json({ success: true, message: `APN updated for device ${id}` });
});

module.exports = router;

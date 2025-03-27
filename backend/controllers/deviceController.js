const devices = require("../data/devices.json");

const getAllDevices = (req, res) => {
  res.json(devices);
};

module.exports = { getAllDevices };

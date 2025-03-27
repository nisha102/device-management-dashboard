const devices = require("../data/devices.json");

const getDevices = (req, res) => {
  res.json(devices);
};

module.exports = { getDevices };

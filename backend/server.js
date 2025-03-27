const express = require("express");
const cors = require("cors");
const deviceRoutes = require("./routes/deviceRoutes");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.use("/devices", deviceRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

const express = require("express");
const cors = require("cors");
const deviceRoutes = require("./routes/deviceRoutes");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());


app.use("/", deviceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

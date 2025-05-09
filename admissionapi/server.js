const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = 5000;

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use("/", studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

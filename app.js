const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/db");
dotenv.config({ path: "./config/.env" });
const authRoute = require("./routes/auth");

app.use(cors());
app.use(express.json());

// All api routes
app.use("/api/auth", authRoute);

connectDb();

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`App is running on: ${PORT}`);
});

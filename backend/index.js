const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user_routes.js");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);

mongoose
  .connect(
    `mongodb+srv://hassan123mirza123:${process.env.MONGODB_PASSWORD}@cluster12345.ioc8rnf.mongodb.net/auth?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
    console.log("Connected to Port 5000");
  })
  .catch((err) => console.log(err));

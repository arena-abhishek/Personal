// require("dotenv").config({path:'./env'})
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/db.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    applisten(process.env.PORT || 8000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

/* import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("error", error);
      throw err;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw err;
  }
})(); */

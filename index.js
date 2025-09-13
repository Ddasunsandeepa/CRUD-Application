const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello From node server");
});

mongoose
  .connect(
    "mongodb+srv://admin_dasun:hiQyvohKuoVYRcwx@backenddb.6plvqrc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });

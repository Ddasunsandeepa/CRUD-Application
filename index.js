const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello From node server");
});

mongoose.connect(
  "mongodb+srv://admin_dasun:Dasun@12345@backend.df9r9as.mongodb.net/?retryWrites=true&w=majority&appName=Backend"
);

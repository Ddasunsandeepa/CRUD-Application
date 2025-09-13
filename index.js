const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/productModels.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From node server");
});

app.post("/api/products", async (req, res) => {
  try {
    console.log(req.body);
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    console.log("Get request received");
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});
mongoose
  .connect(
    "mongodb+srv://admin_dasun:hiQyvohKuoVYRcwx@backenddb.6plvqrc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Database connected successfully");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Database connection failed", err);
  });

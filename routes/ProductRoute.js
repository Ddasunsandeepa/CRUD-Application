const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController.js");
const Product = require("./models/productModels.js");

router.post("/", ProductController.createProducts);

router.get("/", ProductController.getAllProducts);

router.get("/:id", ProductController.getProductById);

router.put("/api/products/:id", ProductController.updateProduct);

app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

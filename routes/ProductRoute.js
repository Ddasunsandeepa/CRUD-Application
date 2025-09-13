const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/ProductController.js");

router.post("/", ProductController.createProducts);

router.get("/", ProductController.getAllProducts);

router.get("/:id", ProductController.getProductById);

router.put("/:id", ProductController.updateProduct);

router.delete("/:id", ProductController.deleteProduct);

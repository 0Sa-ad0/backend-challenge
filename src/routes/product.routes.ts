import express from "express";
import {
  createProduct,
  updateProduct,
} from "../controllers/product.controller";
import {
  createProductValidation,
  updateProductValidation,
} from "../middlewares/validation.middleware";

const router = express.Router();

// POST /products - Create a new product
router.post("/", createProductValidation as any, createProduct as any);

// PUT /products/:productId - Update an existing product
router.put("/:productId", updateProductValidation as any, updateProduct as any);

export default router;

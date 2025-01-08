// src\routes\product.routes.ts

import express from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller";
import {
  createProductValidation,
  updateProductValidation,
} from "../middlewares/validation.middleware";

const router = express.Router();

router.post("/", createProductValidation as any, createProduct as any);

router.put("/:productId", updateProductValidation as any, updateProduct as any);

router.get("/", getProducts as any);

export default router;

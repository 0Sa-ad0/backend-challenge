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
import { getProductsBySubcategory } from "../controllers/category.controller";

const router = express.Router();

router.post("/", createProductValidation as any, createProduct as any);

router.put(
  "/:productCode",
  updateProductValidation as any,
  updateProduct as any
);

router.get("/", getProducts as any);

router.get("/subcategory/:subcategoryId", getProductsBySubcategory as any);

export default router;

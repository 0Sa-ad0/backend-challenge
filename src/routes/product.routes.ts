import express from "express";
import { createProduct } from "../controllers/product.controller";
import createProductValidation from "../middlewares/validation.middleware";

const router = express.Router();

// POST /products
router.post("/", createProductValidation as any, createProduct as any);

export default router;

// src/routes/category.routes.ts

import express from "express";
import {
  createMainCategory,
  createSubcategory,
  getCategories,
} from "../controllers/category.controller";

const router = express.Router();

router.post("/main", createMainCategory as any);
router.post("/sub", createSubcategory as any);
router.get("/", getCategories as any);

export default router;

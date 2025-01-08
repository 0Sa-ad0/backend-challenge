// src/routes/category.routes.ts

import express from "express";
import { createCategory } from "../controllers/category.controller";

const router = express.Router();

router.post("/", createCategory as any);

export default router;

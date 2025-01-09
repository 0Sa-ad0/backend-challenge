"use strict";
// src/routes/category.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("../controllers/category.controller");
const router = express_1.default.Router();
// router.post("/", createCategory as any);
router.post("/main", category_controller_1.createMainCategory);
router.post("/sub", category_controller_1.createSubcategory);
router.get("/", category_controller_1.getCategories);
exports.default = router;

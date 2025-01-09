"use strict";
// src\routes\product.routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const validation_middleware_1 = require("../middlewares/validation.middleware");
const category_controller_1 = require("../controllers/category.controller");
const router = express_1.default.Router();
router.post("/", validation_middleware_1.createProductValidation, product_controller_1.createProduct);
router.put("/:productCode", validation_middleware_1.updateProductValidation, product_controller_1.updateProduct);
router.get("/", product_controller_1.getProducts);
router.get("/subcategory/:subcategoryId", category_controller_1.getProductsBySubcategory);
exports.default = router;

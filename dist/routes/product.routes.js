"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const validation_middleware_1 = __importDefault(require("../middlewares/validation.middleware"));
const router = express_1.default.Router();
// POST /products
router.post("/", validation_middleware_1.default, product_controller_1.createProduct);
exports.default = router;

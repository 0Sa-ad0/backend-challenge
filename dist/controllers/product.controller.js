"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const product_model_1 = require("../models/product.model");
const category_model_1 = require("../models/category.model");
const productCode_util_1 = require("../utils/productCode.util");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, price, discount, image, status, categoryId } = req.body;
        if (!name || !description || !price || !categoryId) {
            return res.status(400).json({
                message: "Name, description, price, and categoryId are required.",
            });
        }
        const category = yield category_model_1.Category.findById(categoryId);
        if (!category) {
            return res.status(400).json({ message: "Invalid category ID." });
        }
        const productCode = (0, productCode_util_1.generateProductCode)(name);
        const product = new product_model_1.Product({
            name,
            description,
            price,
            discount: discount || 0, // Default discount to 0 if not provided
            image,
            status: status || "In Stock", // Default status to "In Stock"
            productCode,
            categoryId,
        });
        yield product.save();
        return res.status(201).json({
            message: "Product created successfully.",
            product,
        });
    }
    catch (error) {
        return res
            .status(500)
            .json({ message: "An error occurred.", error: error.message });
    }
});
exports.createProduct = createProduct;

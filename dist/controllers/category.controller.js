"use strict";
// src/controllers/category.controller.ts
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
exports.getProductsBySubcategory = exports.getCategories = exports.createSubcategory = exports.createMainCategory = void 0;
const category_model_1 = require("../models/category.model");
const product_model_1 = require("../models/product.model");
const createMainCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description } = req.body;
        const category = yield category_model_1.Category.create({ name, description });
        return res.status(201).json(category);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.createMainCategory = createMainCategory;
const createSubcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, parentCategoryId } = req.body;
        const parentCategory = yield category_model_1.Category.findById(parentCategoryId);
        if (!parentCategory) {
            return res.status(400).json({ message: "Invalid main category ID." });
        }
        const subcategory = yield category_model_1.Category.create({
            name,
            description,
            parentCategory: parentCategoryId,
        });
        return res.status(201).json(subcategory);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.createSubcategory = createSubcategory;
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield category_model_1.Category.find()
            .populate("parentCategory", "name description")
            .exec();
        return res.status(200).json(categories);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getCategories = getCategories;
const getProductsBySubcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { subcategoryId } = req.params;
        const products = yield product_model_1.Product.find({ categoryId: subcategoryId });
        return res.status(200).json(products);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
exports.getProductsBySubcategory = getProductsBySubcategory;
// export const createCategory = async (req: Request, res: Response) => {
//   try {
//     const { name, description } = req.body;
//     const category = await Category.create({ name, description });
//     return res.status(201).json(category);
//   } catch (error) {
//     if (error instanceof Error) {
//       return res.status(500).json({ message: (error as any).message });
//     }
//     return res.status(500).json({ message: "An unknown error occurred" });
//   }
// };

"use strict";
// src/middlewares/validation.middleware.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProductValidation = exports.createProductValidation = void 0;
const joi_1 = __importDefault(require("joi"));
const createProductValidation = (req, res, next) => {
    const schema = joi_1.default.object({
        name: joi_1.default.string().required(),
        description: joi_1.default.string().required(),
        price: joi_1.default.number().required(),
        discount: joi_1.default.number().min(0).max(100),
        image: joi_1.default.string().uri(),
        status: joi_1.default.string().valid("In Stock", "Stock Out"),
        categoryId: joi_1.default.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
exports.createProductValidation = createProductValidation;
const updateProductValidation = (req, res, next) => {
    const schema = joi_1.default.object({
        status: joi_1.default.string().valid("In Stock", "Stock Out"),
        description: joi_1.default.string(),
        discount: joi_1.default.number().min(0).max(100),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};
exports.updateProductValidation = updateProductValidation;

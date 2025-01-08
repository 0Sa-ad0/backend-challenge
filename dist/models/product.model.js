"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    image: { type: String },
    status: {
        type: String,
        enum: ["In Stock", "Stock Out"],
        default: "In Stock",
    },
    productCode: { type: String, required: true, unique: true },
    categoryId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
}, { timestamps: true });
exports.Product = (0, mongoose_1.model)("Product", ProductSchema);

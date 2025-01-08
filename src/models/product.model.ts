// src/models/product.model.ts

import mongoose, { Schema, Document, model } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  discount: number;
  image: string;
  status: string;
  productCode: string;
  categoryId: mongoose.Types.ObjectId;
}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model<IProduct>("Product", ProductSchema);

export { Product };

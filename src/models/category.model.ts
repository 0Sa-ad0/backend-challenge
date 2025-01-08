// src/models/category.model.ts

import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  description: string;
}

const CategorySchema: Schema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String },
  },
  { timestamps: true }
);

const Category = mongoose.model<ICategory>("Category", CategorySchema);

export { Category };

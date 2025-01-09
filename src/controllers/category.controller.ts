// src/controllers/category.controller.ts

import { Request, Response } from "express";
import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

export const createMainCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    const category = await Category.create({ name, description });
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createSubcategory = async (req: Request, res: Response) => {
  try {
    const { name, description, parentCategoryId } = req.body;

    const parentCategory = await Category.findById(parentCategoryId);
    if (!parentCategory) {
      return res.status(400).json({ message: "Invalid main category ID." });
    }

    const subcategory = await Category.create({
      name,
      description,
      parentCategory: parentCategoryId,
    });

    return res.status(201).json(subcategory);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find()
      .populate("parentCategory", "name description")
      .exec();

    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProductsBySubcategory = async (req: Request, res: Response) => {
  try {
    const { subcategoryId } = req.params;

    const products = await Product.find({ categoryId: subcategoryId });
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


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

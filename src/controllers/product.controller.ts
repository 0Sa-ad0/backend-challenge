// src/controllers/product.controller.ts

import { NextFunction, Request, Response } from "express";
import { Product } from "../models/product.model";
import { Category } from "../models/category.model";
import { generateProductCode } from "../utils/productCode.util";

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  try {
    const { name, description, price, discount, image, status, categoryId } =
      req.body;

    if (!name || !description || !price || !categoryId) {
      return res.status(400).json({
        message: "Name, description, price, and categoryId are required.",
      });
    }

    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(400).json({ message: "Invalid category ID." });
    }

    const productCode = generateProductCode(name);

    const product = new Product({
      name,
      description,
      price,
      discount: discount || 0,
      image,
      status: status || "In Stock",
      productCode,
      categoryId,
    });

    await product.save();

    return res.status(201).json({
      message: "Product created successfully.",
      product,
    });
  } catch (error) {
    next(error);
    return res
      .status(500)
      .json({ message: "An error occurred.", error: error.message });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  try {
    const { productCode } = req.params;
    const { status, description, discount } = req.body;

    console.log("Received productCode:", productCode);
    const product = await Product.findOne({ productCode });
    if (!product) {
      console.log("Product not found for productCode:", productCode);
      return res.status(404).json({ message: "Product not found." });
    }

    if (status) product.status = status;
    if (description) product.description = description;
    if (discount !== undefined) product.discount = discount;

    await product.save();

    return res.status(200).json({
      message: "Product updated successfully.",
      product,
    });
  } catch (error) {
    next(error);
    return res.status(500).json({
      message: "An error occurred.",
      error: error.message,
    });
  }
};

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response> => {
  try {
    const { categoryId, search, minPrice, maxPrice } = req.query;

    const filterConditions: any = {};

    if (categoryId) {
      filterConditions.categoryId = categoryId;
    }

    if (search) {
      filterConditions.name = { $regex: search, $options: "i" };
    }

    if (minPrice || maxPrice) {
      filterConditions.price = {};
      if (minPrice) filterConditions.price.$gte = minPrice;
      if (maxPrice) filterConditions.price.$lte = maxPrice;
    }

    const products = await Product.find(filterConditions);

    const productsWithPricing = products.map((product) => {
      const finalPrice =
        product.price - product.price * (product.discount / 100);
      return {
        ...product.toObject(),
        finalPrice,
      };
    });

    return res.status(200).json({
      message: "Products fetched successfully.",
      products: productsWithPricing,
    });
  } catch (error) {
    next(error);
    return res
      .status(500)
      .json({ message: "An error occurred.", error: error.message });
  }
};

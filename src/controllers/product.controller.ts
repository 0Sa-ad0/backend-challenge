import { Request, Response } from "express";
import { Product } from "../models/product.model";
import { Category } from "../models/category.model";
import { generateProductCode } from "../utils/productCode.util";

export const createProduct = async (
  req: Request,
  res: Response
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
    return res
      .status(500)
      .json({ message: "An error occurred.", error: error.message });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { productCode } = req.params; // Ensure this is passed
    const { status, description, discount } = req.body;

    const product = await Product.findOne({ productCode }); // Match on productCode
    if (!product) {
      return res.status(404).json({ message: "Product not found." });
    }

    // Update fields conditionally
    if (status) product.status = status;
    if (description) product.description = description;
    if (discount !== undefined) product.discount = discount;

    await product.save();

    return res.status(200).json({
      message: "Product updated successfully.",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred.",
      error: error.message,
    });
  }
};

import { Request, Response } from "express";
import { Category } from "../models/category.model";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;

    const category = await Category.create({ name, description });
    return res.status(201).json(category);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: (error as any).message });
    }
    return res.status(500).json({ message: "An unknown error occurred" });
  }
};

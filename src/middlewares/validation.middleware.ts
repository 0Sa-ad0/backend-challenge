import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const createProductValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    discount: Joi.number().min(0).max(100),
    image: Joi.string().uri(),
    status: Joi.string().valid("In Stock", "Stock Out"),
    categoryId: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

export default createProductValidation;

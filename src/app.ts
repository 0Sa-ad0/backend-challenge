import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes";
import categoryRoutes from "./routes/category.routes";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));

export default app;

"use strict";
// src/app.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const category_routes_1 = __importDefault(require("./routes/category.routes"));
const error_middleware_1 = require("./middlewares/error.middleware");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use("/products", product_routes_1.default);
app.use("/categories", category_routes_1.default);
app.listen(3000, () => console.log("Server running on port 3000"));
app.use(error_middleware_1.errorHandler);
mongoose_1.default
    .connect("mongodb://127.0.0.1:27017/mydatabase")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Connection error:", err));
exports.default = app;

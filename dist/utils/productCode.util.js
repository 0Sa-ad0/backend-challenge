"use strict";
// src/utils/productCode.util.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateProductCode = void 0;
const crypto_1 = __importDefault(require("crypto"));
/**
 * Function to generate a product code based on the product name.
 * @param name - The product name.
 * @returns The generated product code.
 **/
const generateProductCode = (name) => {
    const lowerName = name.toLowerCase();
    let maxSubstrings = [];
    let currentSubstring = lowerName[0] || "";
    let startIndex = 0;
    let currentStart = 0;
    for (let i = 1; i < lowerName.length; i++) {
        if (lowerName[i] > lowerName[i - 1]) {
            currentSubstring += lowerName[i];
        }
        else {
            if (maxSubstrings.length === 0 ||
                currentSubstring.length > maxSubstrings[0].length) {
                maxSubstrings = [currentSubstring];
                startIndex = currentStart;
            }
            else if (currentSubstring.length === maxSubstrings[0].length) {
                maxSubstrings.push(currentSubstring);
            }
            currentSubstring = lowerName[i];
            currentStart = i;
        }
    }
    if (maxSubstrings.length === 0 ||
        currentSubstring.length > maxSubstrings[0].length) {
        maxSubstrings = [currentSubstring];
        startIndex = currentStart;
    }
    else if (currentSubstring.length === maxSubstrings[0].length) {
        maxSubstrings.push(currentSubstring);
    }
    const finalSubstring = maxSubstrings.join("");
    const endIndex = startIndex + finalSubstring.length - 1;
    const hash = crypto_1.default
        .createHash("md5")
        .update(name)
        .digest("hex")
        .substring(0, 8);
    const productCode = `${hash}-${startIndex}${finalSubstring}${endIndex}`;
    return productCode;
};
exports.generateProductCode = generateProductCode;

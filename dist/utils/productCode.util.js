"use strict";
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
 */
const generateProductCode = (name) => {
    // Convert the name to lowercase for consistent processing
    const lowerName = name.toLowerCase();
    // Step 1: Find the longest strictly increasing substrings
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
    // Check the last substring after exiting the loop
    if (maxSubstrings.length === 0 ||
        currentSubstring.length > maxSubstrings[0].length) {
        maxSubstrings = [currentSubstring];
        startIndex = currentStart;
    }
    else if (currentSubstring.length === maxSubstrings[0].length) {
        maxSubstrings.push(currentSubstring);
    }
    // Concatenate substrings if multiple have the same length
    const finalSubstring = maxSubstrings.join("");
    // Calculate the end index
    const endIndex = startIndex + finalSubstring.length - 1;
    // Step 2: Hash the product name
    const hash = crypto_1.default
        .createHash("md5")
        .update(name)
        .digest("hex")
        .substring(0, 8); // Use first 8 characters of the hash
    // Step 3: Construct the product code
    const productCode = `${hash}-${startIndex}${finalSubstring}${endIndex}`;
    return productCode;
};
exports.generateProductCode = generateProductCode;

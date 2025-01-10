# **Backend Development Challenge**

### Environment

NodeJS/Express JS, JavaScript/TypeScript, MongoDB

---

### What To Build

### **1. Create a Product**

Implement functionality to create a product with the following attributes:

- **Name**: The product's name.
- **Description**: A brief description of the product.
- **Price**: The product's price.
- **Discount**: Applicable discount (percentage).
- **Image**: Product's image url.
- **Status**: Availability status (Stock Out / In Stock).
- **Product Code**: An auto-generated unique identifier (detailed rules below).

### **2. Generate Product Code**

Product codes must be auto-generated based on the product name with the following steps:

1. Extract the **longest strictly increasing substring** (consecutive letters in alphabetical order and lowercase).
2. If multiple substrings of equal length exist, concatenate them.
3. Append the starting and ending index of the substring in the product name.
4. Add the **hashed value** of the product name at the beginning as a prefix with a dash (-).
5. **Format**: The final product code should follow this structure:

    **<hashed product name>-<start_index><substring><end_index>**

**Example**:

For a product named **"Alpha Sorter"**:

- Longest increasing substrings: **"alp"** and **"ort"**.
- Starting and ending indices: 0 and 8.
- Generated code: **"p48asd4-0alport8"**.

**Note**: Ensure product codes are unique.

### **3. Associate Products with Categories**

- Each product must be under a **valid category**.
- Validate product-category associations to ensure consistency.

### **4. Update Product Information**

Enable the functionality to update the following product details:

- **Status**: Update availability (Stock Out / In Stock).
- **Description**: Modify product description.
- **Discount**: Update the discount percentage.

### **5. Get Products with Filters**

Implement a method to retrieve products with the following filters:

- **Filter by Category**: Fetch products belonging to a specific category.
- **Search by Name**: Search for products by name (partial or full match).
- **Pricing Calculation**: In the response, include the original and the final price after applying the discount (if any).

# API Documentation

## Categories API

### 1. Main Category

**Endpoint:** `http://localhost:3000/categories/main` <br>
**Method:** `POST`

#### Request Body

```json
{
    "name": "main category",
    "description": "main category for all subcategories"
}

Response Example:
{
    "name": "main category",
    "description": "main category for all subcategories",
    "_id": "677fd906a888fc1a74ed02e9",
    "createdAt": "2025-01-09T14:11:18.980Z",
    "updatedAt": "2025-01-09T14:11:18.980Z",
    "__v": 0
}
```

#### Subcategories

**Endpoint:** `http://localhost:3000/categories/sub` <br>
**Method:** `POST`

Example 1: Mobile Phones

#### Request Body

```json
{
    "name": "Mobile Phones",
    "description": "Smartphones and accessories",
    "parentCategoryId": "677fd906a888fc1a74ed02e9"
}

Response Example:
{
    "name": "Mobile Phones",
    "description": "Smartphones and accessories",
    "parentCategory": "677fd906a888fc1a74ed02e9",
    "_id": "677fdbd1a888fc1a74ed02ec",
    "createdAt": "2025-01-09T14:23:13.342Z",
    "updatedAt": "2025-01-09T14:23:13.342Z",
    "__v": 0
}
```

Example 2: Laptops

#### Request Body

```json
{
    "name": "Laptops",
    "description": "Laptops and notebooks",
    "parentCategoryId": "677fd906a888fc1a74ed02e9"
}

Response Example:
{
    "name": "Laptops",
    "description": "Laptops and notebooks",
    "parentCategory": "677fd906a888fc1a74ed02e9",
    "_id": "677fdcb2a888fc1a74ed02ef",
    "createdAt": "2025-01-09T14:26:58.754Z",
    "updatedAt": "2025-01-09T14:26:58.754Z",
    "__v": 0
}
```

Example 3: Tablets

#### Request Body

```json
{
    "name": "Tablets",
    "description": "Tablet devices",
    "parentCategoryId": "677fd906a888fc1a74ed02e9"
}

Response Example:
{
    "name": "Tablets",
    "description": "Tablet devices",
    "parentCategory": "677fd906a888fc1a74ed02e9",
    "_id": "677fdcfba888fc1a74ed02f2",
    "createdAt": "2025-01-09T14:28:11.739Z",
    "updatedAt": "2025-01-09T14:28:11.739Z",
    "__v": 0
}
```

Example 4: Wearables

#### Request Body

```json
{
    "name": "Wearables",
    "description": "Smartwatches and fitness trackers",
    "parentCategoryId": "677fd906a888fc1a74ed02e9"
}

Response Example:
{
    "name": "Wearables",
    "description": "Smartwatches and fitness trackers",
    "parentCategory": "677fd906a888fc1a74ed02e9",
    "_id": "677fdd32a888fc1a74ed02f5",
    "createdAt": "2025-01-09T14:29:06.721Z",
    "updatedAt": "2025-01-09T14:29:06.721Z",
    "__v": 0
}
```

Example 5: Home Appliances

#### Request Body

```json
{
    "name": "Home Appliances",
    "description": "Kitchen and household appliances",
    "parentCategoryId": "677fd906a888fc1a74ed02e9"
}

Response Example:
{
    "name": "Home Appliances",
    "description": "Kitchen and household appliances",
    "parentCategory": "677fd906a888fc1a74ed02e9",
    "_id": "677fdd65a888fc1a74ed02f8",
    "createdAt": "2025-01-09T14:29:57.440Z",
    "updatedAt": "2025-01-09T14:29:57.440Z",
    "__v": 0
}
```

*Products* <br>
Products for Mobile Phones <br>
Category ID: `677fdbd1a888fc1a74ed02ec` <br>
**Endpoint:** `http://localhost:3000/products` <br>
**Method:** `POST`

#### Request Body

```json
[
    {
        "name": "Galaxy S22",
        "description": "Latest Samsung flagship smartphone",
        "price": 999.99,
        "discount": 10,
        "image": "https://example.com/galaxy-s22.jpg",
        "status": "In Stock",
        "categoryId": "677fdbd1a888fc1a74ed02ec"
    },
    {
        "name": "iPhone 14 Pro",
        "description": "Apple's high-end smartphone with A16 chip",
        "price": 1199.99,
        "discount": 5,
        "image": "https://example.com/iphone-14-pro.jpg",
        "status": "In Stock",
        "categoryId": "677fdbd1a888fc1a74ed02ec"
    },
    {
        "name": "Pixel 7",
        "description": "Google's newest Pixel device",
        "price": 799.99,
        "discount": 15,
        "image": "https://example.com/pixel-7.jpg",
        "status": "In Stock",
        "categoryId": "677fdbd1a888fc1a74ed02ec"
    },
    {
        "name": "OnePlus 11",
        "description": "Flagship killer with premium specs",
        "price": 699.99,
        "discount": 20,
        "image": "https://example.com/oneplus-11.jpg",
        "status": "In Stock",
        "categoryId": "677fdbd1a888fc1a74ed02ec"
    },
    {
        "name": "Moto G Power",
        "description": "Affordable smartphone with long battery life",
        "price": 199.99,
        "discount": 0,
        "image": "https://example.com/moto-g-power.jpg",
        "status": "In Stock",
        "categoryId": "677fdbd1a888fc1a74ed02ec"
    }
]
```

Products for Laptops <br>
Category ID: `677fdcb2a888fc1a74ed02ef` <br>
**Endpoint:** `http://localhost:3000/products` <br>
**Method:** `POST`

#### Request Body

```json
[
    {
        "name": "MacBook Pro 16-inch",
        "description": "Apple's high-performance laptop",
        "price": 2499.99,
        "discount": 10,
        "image": "https://example.com/macbook-pro.jpg",
        "status": "In Stock",
        "categoryId": "677fdcb2a888fc1a74ed02ef"
    },
    {
        "name": "Dell XPS 15",
        "description": "Premium ultrabook with stunning display",
        "price": 1899.99,
        "discount": 8,
        "image": "https://example.com/dell-xps.jpg",
        "status": "In Stock",
        "categoryId": "677fdcb2a888fc1a74ed02ef"
    },
    {
        "name": "HP Spectre x360",
        "description": "Convertible laptop with excellent battery life",
        "price": 1499.99,
        "discount": 12,
        "image": "https://example.com/hp-spectre.jpg",
        "status": "In Stock",
        "categoryId": "677fdcb2a888fc1a74ed02ef"
    },
    {
        "name": "Asus ROG Zephyrus G14",
        "description": "Compact gaming laptop with powerful specs",
        "price": 1599.99,
        "discount": 15,
        "image": "https://example.com/asus-rog.jpg",
        "status": "In Stock",
        "categoryId": "677fdcb2a888fc1a74ed02ef"
    },
    {
        "name": "Lenovo ThinkPad X1 Carbon",
        "description": "Business laptop with robust build quality",
        "price": 1299.99,
        "discount": 5,
        "image": "https://example.com/thinkpad-x1.jpg",
        "status": "In Stock",
        "categoryId": "677fdcb2a888fc1a74ed02ef"
    }
]
```

Products for Tablets <br>
Category ID: `677fdcfba888fc1a74ed02f2` <br>
**Endpoint:** `http://localhost:3000/products` <br>
**Method:** `POST`

#### Request Body

```json
[
    {
        "name": "iPad Pro 12.9-inch",
        "description": "Apple's premium tablet with M2 chip",
        "price": 1199.99,
        "discount": 5,
        "image": "https://example.com/ipad-pro.jpg",
        "status": "In Stock",
        "categoryId": "677fdcfba888fc1a74ed02f2"
    },
    {
        "name": "Samsung Galaxy Tab S8",
        "description": "High-performance Android tablet",
        "price": 899.99,
        "discount": 10,
        "image": "https://example.com/galaxy-tab.jpg",
        "status": "In Stock",
        "categoryId": "677fdcfba888fc1a74ed02f2"
    },
    {
        "name": "Microsoft Surface Pro 9",
        "description": "2-in-1 tablet with Windows 11",
        "price": 1299.99,
        "discount": 15,
        "image": "https://example.com/surface-pro.jpg",
        "status": "In Stock",
        "categoryId": "677fdcfba888fc1a74ed02f2"
    },
    {
        "name": "Amazon Fire HD 10",
        "description": "Affordable tablet for media consumption",
        "price": 149.99,
        "discount": 20,
        "image": "https://example.com/fire-hd.jpg",
        "status": "In Stock",
        "categoryId": "677fdcfba888fc1a74ed02f2"
    },
    {
        "name": "Lenovo Tab P11",
        "description": "Mid-range tablet for everyday use",
        "price": 249.99,
        "discount": 5,
        "image": "https://example.com/lenovo-tab.jpg",
        "status": "In Stock",
        "categoryId": "677fdcfba888fc1a74ed02f2"
    }
]
```

Products for Wearables <br>
Category ID: `677fdd32a888fc1a74ed02f5` <br>
**Endpoint:** `http://localhost:3000/products` <br>
**Method:** `POST`

```json
[
  {
    "name": "Apple Watch Series 8",
    "description": "Advanced smartwatch with health features",
    "price": 399.99,
    "discount": 5,
    "image": "https://example.com/apple-watch.jpg",
    "status": "In Stock",
    "categoryId": "677fdd32a888fc1a74ed02f5"
  },
  {
    "name": "Samsung Galaxy Watch 5",
    "description": "Feature-packed Android smartwatch",
    "price": 349.99,
    "discount": 10,
    "image": "https://example.com/galaxy-watch.jpg",
    "status": "In Stock",
    "categoryId": "677fdd32a888fc1a74ed02f5"
  },
  {
    "name": "Fitbit Charge 5",
    "description": "Fitness tracker with heart rate monitoring",
    "price": 149.99,
    "discount": 15,
    "image": "https://example.com/fitbit-charge.jpg",
    "status": "In Stock",
    "categoryId": "677fdd32a888fc1a74ed02f5"
  },
  {
    "name": "Garmin Forerunner 955",
    "description": "Smartwatch for athletes",
    "price": 599.99,
    "discount": 8,
    "image": "https://example.com/garmin-forerunner.jpg",
    "status": "In Stock",
    "categoryId": "677fdd32a888fc1a74ed02f5"
  },
  {
    "name": "Amazfit GTR 4",
    "description": "Budget-friendly smartwatch",
    "price": 199.99,
    "discount": 12,
    "image": "https://example.com/amazfit-gtr.jpg",
    "status": "In Stock",
    "categoryId": "677fdd32a888fc1a74ed02f5"
  }
]
```

Products for Home Appliances <br>
Category ID: `677fdd65a888fc1a74ed02f8` <br>
**Endpoint:** `http://localhost:3000/products` <br>
**Method:** `POST`

```json
[
  {
    "name": "Instant Pot Duo",
    "description": "7-in-1 electric pressure cooker",
    "price": 129.99,
    "discount": 10,
    "image": "https://example.com/instant-pot.jpg",
    "status": "In Stock",
    "categoryId": "677fdd65a888fc1a74ed02f8"
  },
  {
    "name": "Dyson V15 Detect",
    "description": "High-end cordless vacuum cleaner",
    "price": 699.99,
    "discount": 5,
    "image": "https://example.com/dyson-v15.jpg",
    "status": "In Stock",
    "categoryId": "677fdd65a888fc1a74ed02f8"
  },
  {
    "name": "KitchenAid Stand Mixer",
    "description": "Iconic mixer for baking enthusiasts",
    "price": 499.99,
    "discount": 8,
    "image": "https://example.com/kitchenaid-mixer.jpg",
    "status": "In Stock",
    "categoryId": "677fdd65a888fc1a74ed02f8"
  },
  {
    "name": "LG OLED TV",
    "description": "Premium smart TV with stunning visuals",
    "price": 1799.99,
    "discount": 12,
    "image": "https://example.com/lg-oled-tv.jpg",
    "status": "In Stock",
    "categoryId": "677fdd65a888fc1a74ed02f8"
  },
  {
    "name": "Philips Air Fryer",
    "description": "Healthier way to fry food",
    "price": 249.99,
    "discount": 15,
    "image": "https://example.com/philips-airfryer.jpg",
    "status": "In Stock",
    "categoryId": "677fdd65a888fc1a74ed02f8"
  }
]
```

**Endpoint:** `http://localhost:3000/categories` <br>
**Method:** `GET`

```json
[
    {
        "_id": "677fd906a888fc1a74ed02e9",
        "name": "main category",
        "description": "main category for all subcasubcategories",
        "createdAt": "2025-01-09T14:11:18.980Z",
        "updatedAt": "2025-01-09T14:11:18.980Z",
        "__v": 0
    },
    {
        "_id": "677fdbd1a888fc1a74ed02ec",
        "name": "Mobile Phones",
        "description": "Smartphones and accessories",
        "parentCategory": {
            "_id": "677fd906a888fc1a74ed02e9",
            "name": "main category",
            "description": "main category for all subcasubcategories"
        },
        "createdAt": "2025-01-09T14:23:13.342Z",
        "updatedAt": "2025-01-09T14:23:13.342Z",
        "__v": 0
    },
    {
        "_id": "677fdcb2a888fc1a74ed02ef",
        "name": "Laptops",
        "description": "Laptops and notebooks",
        "parentCategory": {
            "_id": "677fd906a888fc1a74ed02e9",
            "name": "main category",
            "description": "main category for all subcasubcategories"
        },
        "createdAt": "2025-01-09T14:26:58.754Z",
        "updatedAt": "2025-01-09T14:26:58.754Z",
        "__v": 0
    },
    {
        "_id": "677fdcfba888fc1a74ed02f2",
        "name": "Tablets",
        "description": "Tablet devices",
        "parentCategory": {
            "_id": "677fd906a888fc1a74ed02e9",
            "name": "main category",
            "description": "main category for all subcasubcategories"
        },
        "createdAt": "2025-01-09T14:28:11.739Z",
        "updatedAt": "2025-01-09T14:28:11.739Z",
        "__v": 0
    },
    {
        "_id": "677fdd32a888fc1a74ed02f5",
        "name": "Wearables",
        "description": "Smartwatches and fitness trackers",
        "parentCategory": {
            "_id": "677fd906a888fc1a74ed02e9",
            "name": "main category",
            "description": "main category for all subcasubcategories"
        },
        "createdAt": "2025-01-09T14:29:06.721Z",
        "updatedAt": "2025-01-09T14:29:06.721Z",
        "__v": 0
    },
    {
        "_id": "677fdd65a888fc1a74ed02f8",
        "name": "Home Appliances",
        "description": "Kitchen and household appliances",
        "parentCategory": {
            "_id": "677fd906a888fc1a74ed02e9",
            "name": "main category",
            "description": "main category for all subcasubcategories"
        },
        "createdAt": "2025-01-09T14:29:57.440Z",
        "updatedAt": "2025-01-09T14:29:57.440Z",
        "__v": 0
    }
]
```

**Endpoint:** `http://localhost:3000/products` <br>
**Method:** `GET`

```json
{
    "message": "Products fetched successfully.",
    "products": [
        {
            "_id": "677fe0e8a888fc1a74ed02fb",
            "name": "Galaxy S22",
            "description": "Latest Samsung flagship smartphone",
            "price": 999.99,
            "discount": 10,
            "image": "https://example.com/galaxy-s22.jpg",
            "status": "In Stock",
            "productCode": "6ebec15c-3axy5",
            "categoryId": "677fdbd1a888fc1a74ed02ec",
            "createdAt": "2025-01-09T14:44:56.614Z",
            "updatedAt": "2025-01-09T14:44:56.614Z",
            "__v": 0,
            "finalPrice": 899.991
        },
        {
            "_id": "677fe138a888fc1a74ed02fe",
            "name": "iPhone 14 Pro",
            "description": "Apple's high-end smartphone with A16 chip",
            "price": 1199.99,
            "discount": 5,
            "image": "https://example.com/iphone-14-pro.jpg",
            "status": "In Stock",
            "productCode": "dfc1a87f-6 14 pr11",
            "categoryId": "677fdbd1a888fc1a74ed02ec",
            "createdAt": "2025-01-09T14:46:16.595Z",
            "updatedAt": "2025-01-09T14:46:16.595Z",
            "__v": 0,
            "finalPrice": 1139.9905
        },
        {
            "_id": "677fe185a888fc1a74ed0301",
            "name": "Pixel 7",
            "description": "Google's newest Pixel device",
            "price": 799.99,
            "discount": 15,
            "image": "https://example.com/pixel-7.jpg",
            "status": "In Stock",
            "productCode": "23fb8baf-1ixel 76",
            "categoryId": "677fdbd1a888fc1a74ed02ec",
            "createdAt": "2025-01-09T14:47:33.904Z",
            "updatedAt": "2025-01-09T14:47:33.904Z",
            "__v": 0,
            "finalPrice": 679.9915
        },
        {
            "_id": "677fe1e8a888fc1a74ed0304",
            "name": "OnePlus 11",
            "description": "Flagship killer with premium specs",
            "price": 699.99,
            "discount": 20,
            "image": "https://example.com/oneplus-11.jpg",
            "status": "In Stock",
            "productCode": "364e3737-2eplu 17",
            "categoryId": "677fdbd1a888fc1a74ed02ec",
            "createdAt": "2025-01-09T14:49:12.809Z",
            "updatedAt": "2025-01-09T14:49:12.809Z",
            "__v": 0,
            "finalPrice": 559.992
        },
        {
            "_id": "677fe212a888fc1a74ed0307",
            "name": "Moto G Power",
            "description": "Affordable smartphone with long battery life",
            "price": 199.99,
            "discount": 30,
            "image": "https://example.com/moto-g-power.jpg",
            "status": "In Stock",
            "productCode": "68b1a12e-0mot2",
            "categoryId": "677fdbd1a888fc1a74ed02ec",
            "createdAt": "2025-01-09T14:49:54.003Z",
            "updatedAt": "2025-01-09T14:49:54.003Z",
            "__v": 0,
            "finalPrice": 139.993
        },
        {
            "_id": "677fe557a888fc1a74ed030a",
            "name": "MacBook Pro 16-inch",
            "description": "Apple's high-performance laptop",
            "price": 2499.99,
            "discount": 10,
            "image": "https://example.com/macbook-pro.jpg",
            "status": "In Stock",
            "productCode": "d95a0c1e-7 pr 16-in15",
            "categoryId": "677fdcb2a888fc1a74ed02ef",
            "createdAt": "2025-01-09T15:03:51.006Z",
            "updatedAt": "2025-01-09T15:03:51.006Z",
            "__v": 0,
            "finalPrice": 2249.991
        },
        {
            "_id": "677fe581a888fc1a74ed030d",
            "name": "Dell XPS 15",
            "description": "Premium ultrabook with stunning display",
            "price": 1899.99,
            "discount": 8,
            "image": "https://example.com/dell-xps.jpg",
            "status": "In Stock",
            "productCode": "9ba959f4-0del 155",
            "categoryId": "677fdcb2a888fc1a74ed02ef",
            "createdAt": "2025-01-09T15:04:33.054Z",
            "updatedAt": "2025-01-09T15:04:33.054Z",
            "__v": 0,
            "finalPrice": 1747.9908
        },
        {
            "_id": "677fe58ba888fc1a74ed0310",
            "name": "HP Spectre x360",
            "description": "Convertible laptop with excellent battery life",
            "price": 1499.99,
            "discount": 12,
            "image": "https://example.com/hp-spectre.jpg",
            "status": "In Stock",
            "productCode": "22134800-0hp sct x369",
            "categoryId": "677fdcb2a888fc1a74ed02ef",
            "createdAt": "2025-01-09T15:04:43.055Z",
            "updatedAt": "2025-01-09T15:04:43.055Z",
            "__v": 0,
            "finalPrice": 1319.9912
        },
        {
            "_id": "677fe59aa888fc1a74ed0313",
            "name": "Asus ROG Zephyrus G14",
            "description": "Compact gaming laptop with powerful specs",
            "price": 1599.99,
            "discount": 15,
            "image": "https://example.com/asus-rog.jpg",
            "status": "In Stock",
            "productCode": "ec075da8-0asu2",
            "categoryId": "677fdcb2a888fc1a74ed02ef",
            "createdAt": "2025-01-09T15:04:58.335Z",
            "updatedAt": "2025-01-09T15:04:58.335Z",
            "__v": 0,
            "finalPrice": 1359.9915
        },
        {
            "_id": "677fe5a2a888fc1a74ed0316",
            "name": "Lenovo ThinkPad X1 Carbon",
            "description": "Business laptop with robust build quality",
            "price": 1299.99,
            "discount": 5,
            "image": "https://example.com/thinkpad-x1.jpg",
            "status": "In Stock",
            "productCode": "cd454a2f-1enov4",
            "categoryId": "677fdcb2a888fc1a74ed02ef",
            "createdAt": "2025-01-09T15:05:06.427Z",
            "updatedAt": "2025-01-09T15:05:06.427Z",
            "__v": 0,
            "finalPrice": 1234.9905
        },
        {
            "_id": "677fe5d6a888fc1a74ed0319",
            "name": "iPad Pro 12.9-inch",
            "description": "Apple's premium tablet with M2 chip",
            "price": 1199.99,
            "discount": 5,
            "image": "https://example.com/ipad-pro.jpg",
            "status": "In Stock",
            "productCode": "9043e7e8-4 pr 12-in12",
            "categoryId": "677fdcfba888fc1a74ed02f2",
            "createdAt": "2025-01-09T15:05:58.620Z",
            "updatedAt": "2025-01-09T15:05:58.620Z",
            "__v": 0,
            "finalPrice": 1139.9905
        },
        {
            "_id": "677fe5dea888fc1a74ed031c",
            "name": "Samsung Galaxy Tab S8",
            "description": "High-performance Android tablet",
            "price": 899.99,
            "discount": 10,
            "image": "https://example.com/galaxy-tab.jpg",
            "status": "In Stock",
            "productCode": "3fadb431-1amsu4",
            "categoryId": "677fdcfba888fc1a74ed02f2",
            "createdAt": "2025-01-09T15:06:06.537Z",
            "updatedAt": "2025-01-09T15:06:06.537Z",
            "__v": 0,
            "finalPrice": 809.991
        },
        {
            "_id": "677fe5e7a888fc1a74ed031f",
            "name": "Microsoft Surface Pro 9",
            "description": "2-in-1 tablet with Windows 11",
            "price": 1299.99,
            "discount": 15,
            "image": "https://example.com/surface-pro.jpg",
            "status": "In Stock",
            "productCode": "09d6b9e0-9 suace pr17",
            "categoryId": "677fdcfba888fc1a74ed02f2",
            "createdAt": "2025-01-09T15:06:15.499Z",
            "updatedAt": "2025-01-09T15:06:15.499Z",
            "__v": 0,
            "finalPrice": 1104.9915
        },
        {
            "_id": "677fe5f2a888fc1a74ed0322",
            "name": "Amazon Fire HD 10",
            "description": "Affordable tablet for media consumption",
            "price": 149.99,
            "discount": 20,
            "image": "https://example.com/fire-hd.jpg",
            "status": "In Stock",
            "productCode": "449beaea-6 fir9",
            "categoryId": "677fdcfba888fc1a74ed02f2",
            "createdAt": "2025-01-09T15:06:26.153Z",
            "updatedAt": "2025-01-09T15:06:26.153Z",
            "__v": 0,
            "finalPrice": 119.992
        },
        {
            "_id": "677fe5fba888fc1a74ed0325",
            "name": "Lenovo Tab P11",
            "description": "Mid-range tablet for everyday use",
            "price": 249.99,
            "discount": 5,
            "image": "https://example.com/lenovo-tab.jpg",
            "status": "In Stock",
            "productCode": "9fa6e199-1enov4",
            "categoryId": "677fdcfba888fc1a74ed02f2",
            "createdAt": "2025-01-09T15:06:35.009Z",
            "updatedAt": "2025-01-09T15:06:35.009Z",
            "__v": 0,
            "finalPrice": 237.4905
        },
        {
            "_id": "677fe611a888fc1a74ed0328",
            "name": "Apple Watch Series 8",
            "description": "Advanced smartwatch with health features",
            "price": 399.99,
            "discount": 5,
            "image": "https://example.com/apple-watch.jpg",
            "status": "In Stock",
            "productCode": "974a8ed9-0ap watch seres 815",
            "categoryId": "677fdd32a888fc1a74ed02f5",
            "createdAt": "2025-01-09T15:06:57.361Z",
            "updatedAt": "2025-01-09T15:06:57.361Z",
            "__v": 0,
            "finalPrice": 379.9905
        },
        {
            "_id": "677fe61aa888fc1a74ed032b",
            "name": "Samsung Galaxy Watch 5",
            "description": "Feature-packed Android smartwatch",
            "price": 349.99,
            "discount": 10,
            "image": "https://example.com/galaxy-watch.jpg",
            "status": "In Stock",
            "productCode": "543210f2-1amsu4",
            "categoryId": "677fdd32a888fc1a74ed02f5",
            "createdAt": "2025-01-09T15:07:06.716Z",
            "updatedAt": "2025-01-09T15:07:06.716Z",
            "__v": 0,
            "finalPrice": 314.991
        },
        {
            "_id": "677fe629a888fc1a74ed032e",
            "name": "Fitbit Charge 5",
            "description": "Fitness tracker with heart rate monitoring",
            "price": 149.99,
            "discount": 15,
            "image": "https://example.com/fitbit-charge.jpg",
            "status": "In Stock",
            "productCode": "d1907742-0fitbit ch8",
            "categoryId": "677fdd32a888fc1a74ed02f5",
            "createdAt": "2025-01-09T15:07:21.974Z",
            "updatedAt": "2025-01-09T15:07:21.974Z",
            "__v": 0,
            "finalPrice": 127.4915
        },
        {
            "_id": "677fe632a888fc1a74ed0331",
            "name": "Garmin Forerunner 955",
            "description": "Smartwatch for athletes",
            "price": 599.99,
            "discount": 8,
            "image": "https://example.com/garmin-forerunner.jpg",
            "status": "In Stock",
            "productCode": "f8306609-6 for9",
            "categoryId": "677fdd32a888fc1a74ed02f5",
            "createdAt": "2025-01-09T15:07:30.703Z",
            "updatedAt": "2025-01-09T15:07:30.703Z",
            "__v": 0,
            "finalPrice": 551.9908
        },
        {
            "_id": "677fe63aa888fc1a74ed0334",
            "name": "Amazfit GTR 4",
            "description": "Budget-friendly smartwatch",
            "price": 199.99,
            "discount": 12,
            "image": "https://example.com/amazfit-gtr.jpg",
            "status": "In Stock",
            "productCode": "d1a68113-4fit gt9",
            "categoryId": "677fdd32a888fc1a74ed02f5",
            "createdAt": "2025-01-09T15:07:38.749Z",
            "updatedAt": "2025-01-09T15:07:38.749Z",
            "__v": 0,
            "finalPrice": 175.99120000000002
        },
        {
            "_id": "677fe649a888fc1a74ed0337",
            "name": "Instant Pot Duo",
            "description": "7-in-1 electric pressure cooker",
            "price": 129.99,
            "discount": 10,
            "image": "https://example.com/instant-pot.jpg",
            "status": "In Stock",
            "productCode": "4575e5af-0inst3",
            "categoryId": "677fdd65a888fc1a74ed02f8",
            "createdAt": "2025-01-09T15:07:53.050Z",
            "updatedAt": "2025-01-09T15:07:53.050Z",
            "__v": 0,
            "finalPrice": 116.99100000000001
        },
        {
            "_id": "677fe653a888fc1a74ed033a",
            "name": "Dyson V15 Detect",
            "description": "High-end cordless vacuum cleaner",
            "price": 699.99,
            "discount": 5,
            "image": "https://example.com/dyson-v15.jpg",
            "status": "In Stock",
            "productCode": "2a512b99-9 det12",
            "categoryId": "677fdd65a888fc1a74ed02f8",
            "createdAt": "2025-01-09T15:08:03.719Z",
            "updatedAt": "2025-01-09T15:08:03.719Z",
            "__v": 0,
            "finalPrice": 664.9905
        },
        {
            "_id": "677fe65da888fc1a74ed033d",
            "name": "KitchenAid Stand Mixer",
            "description": "Iconic mixer for baking enthusiasts",
            "price": 499.99,
            "discount": 8,
            "image": "https://example.com/kitchenaid-mixer.jpg",
            "status": "In Stock",
            "productCode": "138d02e2-10 st12",
            "categoryId": "677fdd65a888fc1a74ed02f8",
            "createdAt": "2025-01-09T15:08:13.523Z",
            "updatedAt": "2025-01-09T15:08:13.523Z",
            "__v": 0,
            "finalPrice": 459.99080000000004
        },
        {
            "_id": "677fe666a888fc1a74ed0340",
            "name": "LG OLED TV",
            "description": "Premium smart TV with stunning visuals",
            "price": 1799.99,
            "discount": 12,
            "image": "https://example.com/lg-oled-tv.jpg",
            "status": "In Stock",
            "productCode": "0c5f87fb-7 tv9",
            "categoryId": "677fdd65a888fc1a74ed02f8",
            "createdAt": "2025-01-09T15:08:22.393Z",
            "updatedAt": "2025-01-09T15:08:22.393Z",
            "__v": 0,
            "finalPrice": 1583.9912
        },
        {
            "_id": "677fe66ea888fc1a74ed0343",
            "name": "Philips Air Fryer",
            "description": "Healthier way to fry food",
            "price": 249.99,
            "discount": 15,
            "image": "https://example.com/philips-airfryer.jpg",
            "status": "In Stock",
            "productCode": "2374047c-7 air fry14",
            "categoryId": "677fdd65a888fc1a74ed02f8",
            "createdAt": "2025-01-09T15:08:30.747Z",
            "updatedAt": "2025-01-09T15:08:30.747Z",
            "__v": 0,
            "finalPrice": 212.4915
        },
        {
            "_id": "677ff33fa888fc1a74ed0348",
            "name": "Alpha Sorter",
            "description": "A tool for sorting items efficiently.",
            "price": 100,
            "discount": 10,
            "image": "https://example.com/image.png",
            "status": "In Stock",
            "productCode": "0231dd7a-0alport5",
            "categoryId": "677fdd65a888fc1a74ed02f8",
            "createdAt": "2025-01-09T16:03:11.078Z",
            "updatedAt": "2025-01-09T16:03:11.078Z",
            "__v": 0,
            "finalPrice": 90
        }
    ]
}
```

`http://localhost:3000/products/subcategory/677fdd65a888fc1a74ed02f8` <br>
`GET`

```json
[
    {
        "_id": "677fe649a888fc1a74ed0337",
        "name": "Instant Pot Duo",
        "description": "7-in-1 electric pressure cooker",
        "price": 129.99,
        "discount": 10,
        "image": "https://example.com/instant-pot.jpg",
        "status": "In Stock",
        "productCode": "4575e5af-0inst3",
        "categoryId": "677fdd65a888fc1a74ed02f8",
        "createdAt": "2025-01-09T15:07:53.050Z",
        "updatedAt": "2025-01-09T15:07:53.050Z",
        "__v": 0
    },
    {
        "_id": "677fe653a888fc1a74ed033a",
        "name": "Dyson V15 Detect",
        "description": "High-end cordless vacuum cleaner",
        "price": 699.99,
        "discount": 5,
        "image": "https://example.com/dyson-v15.jpg",
        "status": "In Stock",
        "productCode": "2a512b99-9 det12",
        "categoryId": "677fdd65a888fc1a74ed02f8",
        "createdAt": "2025-01-09T15:08:03.719Z",
        "updatedAt": "2025-01-09T15:08:03.719Z",
        "__v": 0
    },
    {
        "_id": "677fe65da888fc1a74ed033d",
        "name": "KitchenAid Stand Mixer",
        "description": "Iconic mixer for baking enthusiasts",
        "price": 499.99,
        "discount": 8,
        "image": "https://example.com/kitchenaid-mixer.jpg",
        "status": "In Stock",
        "productCode": "138d02e2-10 st12",
        "categoryId": "677fdd65a888fc1a74ed02f8",
        "createdAt": "2025-01-09T15:08:13.523Z",
        "updatedAt": "2025-01-09T15:08:13.523Z",
        "__v": 0
    },
    {
        "_id": "677fe666a888fc1a74ed0340",
        "name": "LG OLED TV",
        "description": "Premium smart TV with stunning visuals",
        "price": 1799.99,
        "discount": 12,
        "image": "https://example.com/lg-oled-tv.jpg",
        "status": "In Stock",
        "productCode": "0c5f87fb-7 tv9",
        "categoryId": "677fdd65a888fc1a74ed02f8",
        "createdAt": "2025-01-09T15:08:22.393Z",
        "updatedAt": "2025-01-09T15:08:22.393Z",
        "__v": 0
    },
    {
        "_id": "677fe66ea888fc1a74ed0343",
        "name": "Philips Air Fryer",
        "description": "Healthier way to fry food",
        "price": 249.99,
        "discount": 15,
        "image": "https://example.com/philips-airfryer.jpg",
        "status": "In Stock",
        "productCode": "2374047c-7 air fry14",
        "categoryId": "677fdd65a888fc1a74ed02f8",
        "createdAt": "2025-01-09T15:08:30.747Z",
        "updatedAt": "2025-01-09T15:08:30.747Z",
        "__v": 0
    },
    {
        "_id": "677ff33fa888fc1a74ed0348",
        "name": "Alpha Sorter",
        "description": "A tool for sorting items efficiently.",
        "price": 100,
        "discount": 10,
        "image": "https://example.com/image.png",
        "status": "In Stock",
        "productCode": "0231dd7a-0alport5",
        "categoryId": "677fdd65a888fc1a74ed02f8",
        "createdAt": "2025-01-09T16:03:11.078Z",
        "updatedAt": "2025-01-09T16:03:11.078Z",
        "__v": 0
    }
]
```

`http://localhost:3000/products/0231dd7a-0alport5` <br>
`PUT`

```json
{
    "status": "Stock Out",
    "description": "Updated description of the product.",
    "discount": 20
}

{
    "message": "Product updated successfully.",
    "product": {
        "_id": "677ff33fa888fc1a74ed0348",
        "name": "Alpha Sorter",
        "description": "Updated description of the product.",
        "price": 100,
        "discount": 20,
        "image": "https://example.com/image.png",
        "status": "Stock Out",
        "productCode": "0231dd7a-0alport5",
        "categoryId": "677fdd65a888fc1a74ed02f8",
        "createdAt": "2025-01-09T16:03:11.078Z",
        "updatedAt": "2025-01-09T16:20:22.952Z",
        "__v": 0
    }
}
```

`http://localhost:3000/products?search=alpha` <br>
`GET`

```json
{
    "message": "Products fetched successfully.",
    "products": [
        {
            "_id": "677ff33fa888fc1a74ed0348",
            "name": "Alpha Sorter",
            "description": "Updated description of the product.",
            "price": 100,
            "discount": 20,
            "image": "https://example.com/image.png",
            "status": "Stock Out",
            "productCode": "0231dd7a-0alport5",
            "categoryId": "677fdd65a888fc1a74ed02f8",
            "createdAt": "2025-01-09T16:03:11.078Z",
            "updatedAt": "2025-01-09T16:20:22.952Z",
            "__v": 0,
            "finalPrice": 80
        }
    ]
}
```

`http://localhost:3000/products?categoryId=677fdd32a888fc1a74ed02f5` <br>
`GET`

```json
{
    "message": "Products fetched successfully.",
    "products": [
        {
            "_id": "677fe611a888fc1a74ed0328",
            "name": "Apple Watch Series 8",
            "description": "Advanced smartwatch with health features",
            "price": 399.99,
            "discount": 5,
            "image": "https://example.com/apple-watch.jpg",
            "status": "In Stock",
            "productCode": "974a8ed9-0ap watch seres 815",
            "categoryId": "677fdd32a888fc1a74ed02f5",
            "createdAt": "2025-01-09T15:06:57.361Z",
            "updatedAt": "2025-01-09T15:06:57.361Z",
            "__v": 0,
            "finalPrice": 379.9905
        },
        {
            "_id": "677fe61aa888fc1a74ed032b",
            "name": "Samsung Galaxy Watch 5",
            "description": "Feature-packed Android smartwatch",
            "price": 349.99,
            "discount": 10,
            "image": "https://example.com/galaxy-watch.jpg",
            "status": "In Stock",
            "productCode": "543210f2-1amsu4",
            "categoryId": "677fdd32a888fc1a74ed02f5",
            "createdAt": "2025-01-09T15:07:06.716Z",
            "updatedAt": "2025-01-09T15:07:06.716Z",
            "__v": 0,
            "finalPrice": 314.991
        },
        {
            "_id": "677fe629a888fc1a74ed032e",
            "name": "Fitbit Charge 5",
            "description": "Fitness tracker with heart rate monitoring",
            "price": 149.99,
            "discount": 15,
            "image": "https://example.com/fitbit-charge.jpg",
            "status": "In Stock",
            "productCode": "d1907742-0fitbit ch8",
            "categoryId": "677fdd32a888fc1a74ed02f5",
            "createdAt": "2025-01-09T15:07:21.974Z",
            "updatedAt": "2025-01-09T15:07:21.974Z",
            "__v": 0,
            "finalPrice": 127.4915
        },
        {
            "_id": "677fe632a888fc1a74ed0331",
            "name": "Garmin Forerunner 955",
            "description": "Smartwatch for athletes",
            "price": 599.99,
            "discount": 8,
            "image": "https://example.com/garmin-forerunner.jpg",
            "status": "In Stock",
            "productCode": "f8306609-6 for9",
            "categoryId": "677fdd32a888fc1a74ed02f5",
            "createdAt": "2025-01-09T15:07:30.703Z",
            "updatedAt": "2025-01-09T15:07:30.703Z",
            "__v": 0,
            "finalPrice": 551.9908
        },
        {
            "_id": "677fe63aa888fc1a74ed0334",
            "name": "Amazfit GTR 4",
            "description": "Budget-friendly smartwatch",
            "price": 199.99,
            "discount": 12,
            "image": "https://example.com/amazfit-gtr.jpg",
            "status": "In Stock",
            "productCode": "d1a68113-4fit gt9",
            "categoryId": "677fdd32a888fc1a74ed02f5",
            "createdAt": "2025-01-09T15:07:38.749Z",
            "updatedAt": "2025-01-09T15:07:38.749Z",
            "__v": 0,
            "finalPrice": 175.99120000000002
        }
    ]
}
```

`http://localhost:3000/products?minPrice=100&maxPrice=200` <br>
`GET`

```json
{
    "message": "Products fetched successfully.",
    "products": [
        {
            "_id": "677fe212a888fc1a74ed0307",
            "name": "Moto G Power",
            "description": "Affordable smartphone with long battery life",
            "price": 199.99,
            "discount": 30,
            "image": "https://example.com/moto-g-power.jpg",
            "status": "In Stock",
            "productCode": "68b1a12e-0mot2",
            "categoryId": "677fdbd1a888fc1a74ed02ec",
            "createdAt": "2025-01-09T14:49:54.003Z",
            "updatedAt": "2025-01-09T14:49:54.003Z",
            "__v": 0,
            "finalPrice": 139.993
        },
        {
            "_id": "677fe5f2a888fc1a74ed0322",
            "name": "Amazon Fire HD 10",
            "description": "Affordable tablet for media consumption",
            "price": 149.99,
            "discount": 20,
            "image": "https://example.com/fire-hd.jpg",
            "status": "In Stock",
            "productCode": "449beaea-6 fir9",
            "categoryId": "677fdcfba888fc1a74ed02f2",
            "createdAt": "2025-01-09T15:06:26.153Z",
            "updatedAt": "2025-01-09T15:06:26.153Z",
            "__v": 0,
            "finalPrice": 119.992
        },
        {
            "_id": "677fe629a888fc1a74ed032e",
            "name": "Fitbit Charge 5",
            "description": "Fitness tracker with heart rate monitoring",
            "price": 149.99,
            "discount": 15,
            "image": "https://example.com/fitbit-charge.jpg",
            "status": "In Stock",
            "productCode": "d1907742-0fitbit ch8",
            "categoryId": "677fdd32a888fc1a74ed02f5",
            "createdAt": "2025-01-09T15:07:21.974Z",
            "updatedAt": "2025-01-09T15:07:21.974Z",
            "__v": 0,
            "finalPrice": 127.4915
        },
        {
            "_id": "677fe63aa888fc1a74ed0334",
            "name": "Amazfit GTR 4",
            "description": "Budget-friendly smartwatch",
            "price": 199.99,
            "discount": 12,
            "image": "https://example.com/amazfit-gtr.jpg",
            "status": "In Stock",
            "productCode": "d1a68113-4fit gt9",
            "categoryId": "677fdd32a888fc1a74ed02f5",
            "createdAt": "2025-01-09T15:07:38.749Z",
            "updatedAt": "2025-01-09T15:07:38.749Z",
            "__v": 0,
            "finalPrice": 175.99120000000002
        },
        {
            "_id": "677fe649a888fc1a74ed0337",
            "name": "Instant Pot Duo",
            "description": "7-in-1 electric pressure cooker",
            "price": 129.99,
            "discount": 10,
            "image": "https://example.com/instant-pot.jpg",
            "status": "In Stock",
            "productCode": "4575e5af-0inst3",
            "categoryId": "677fdd65a888fc1a74ed02f8",
            "createdAt": "2025-01-09T15:07:53.050Z",
            "updatedAt": "2025-01-09T15:07:53.050Z",
            "__v": 0,
            "finalPrice": 116.99100000000001
        },
        {
            "_id": "677ff33fa888fc1a74ed0348",
            "name": "Alpha Sorter",
            "description": "Updated description of the product.",
            "price": 100,
            "discount": 20,
            "image": "https://example.com/image.png",
            "status": "Stock Out",
            "productCode": "0231dd7a-0alport5",
            "categoryId": "677fdd65a888fc1a74ed02f8",
            "createdAt": "2025-01-09T16:03:11.078Z",
            "updatedAt": "2025-01-09T16:20:22.952Z",
            "__v": 0,
            "finalPrice": 80
        }
    ]
}
```

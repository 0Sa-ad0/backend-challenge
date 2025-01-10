# API Documentation

## Categories API

### 1. Main Category

**Endpoint:** `http://localhost:3000/categories/main`
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
**Endpoint:** `http://localhost:3000/categories/sub`
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

**Endpoint:** `http://localhost:3000/categories/main`  
**Method:** `POST`

#### Request Body
```json
{
    "name": "main category",
    "description": "main category for all subcategories"
}

Response Example
{
    "name": "main category",
    "description": "main category for all subcategories",
    "_id": "677fd906a888fc1a74ed02e9",
    "createdAt": "2025-01-09T14:11:18.980Z",
    "updatedAt": "2025-01-09T14:11:18.980Z",
    "__v": 0
}
```

Subcategories
**Endpoint:** `http://localhost:3000/categories/sub`
**Method:** `POST`

Mobile Phones
#### Request Body
```json
{
    "name": "Mobile Phones",
    "description": "Smartphones and accessories",
    "parentCategoryId": "677fd906a888fc1a74ed02e9"
}
```

Laptops
#### Request Body
```json
{
    "name": "Laptops",
    "description": "Laptops and notebooks",
    "parentCategoryId": "677fd906a888fc1a74ed02e9"
}
```

Tablets
#### Request Body
```json
{
    "name": "Tablets",
    "description": "Tablet devices",
    "parentCategoryId": "677fd906a888fc1a74ed02e9"
}
```

Wearables
#### Request Body
```json
{
    "name": "Wearables",
    "description": "Smartwatches and fitness trackers",
    "parentCategoryId": "677fd906a888fc1a74ed02e9"
}
```

Home Appliances
#### Request Body
```json
{
    "name": "Home Appliances",
    "description": "Kitchen and household appliances",
    "parentCategoryId": "677fd906a888fc1a74ed02e9"
}
```

# Products
Products for Mobile Phones
Category ID: 677fdbd1a888fc1a74ed02ec
Endpoint: http://localhost:3000/products
Method: POST

Request Body Example
json
Copy code
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
    }
    // Additional products here...
]
Products for Laptops
Category ID: 677fdcb2a888fc1a74ed02ef
Endpoint: http://localhost:3000/products
Method: POST

Request Body Example
json
Copy code
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
    }
    // Additional products here...
]
Products for Tablets
Category ID: 677fdcfba888fc1a74ed02f2
Endpoint: http://localhost:3000/products
Method: POST

Request Body Example
json
Copy code
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
    }
    // Additional products here...
]

























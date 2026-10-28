const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    category: "Electronics",
    image: "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 3499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 2499,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 4,
    name: "Backpack",
    price: 1299,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 5,
    name: "Coffee Mug",
    price: 349,
    category: "Home",
    image: "https://plus.unsplash.com/premium_photo-1719289799337-9cb436447965?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 6,
    name: "Desk Lamp",
    price: 899,
    category: "Home",
    image: "https://images.unsplash.com/photo-1579326882518-21eaa7893b02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 1599,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 8,
    name: "Sunglasses",
    price: 799,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

export default products;

// An array of product objects.
// Each product needs a UNIQUE id. Redux will use the id to know
// which product to increase, decrease, or remove.
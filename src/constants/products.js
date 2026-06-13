// src/constants/products.js

// Main products database
export const products = [
  { 
    id: 1, 
    name: 'Oversized Tee', 
    price: 799, 
    originalPrice: 1299, 
    category: 'men', 
    subcategory: 't-shirts',
    image: '/src/assets/images/product-1.jpg',
    images: [
      '/src/assets/images/product-1.jpg',
      '/src/assets/images/product-1-alt.jpg',
      '/src/assets/images/product-1-detail.jpg',
    ],
    isNew: true,
    rating: 4.5,
    reviewCount: 128,
    colors: ['Beige', 'Black', 'White', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    description: 'Elevate your everyday look with our premium oversized tee. Crafted from 100% organic cotton for maximum comfort and breathability. The relaxed fit and dropped shoulders create a modern silhouette that pairs perfectly with joggers, jeans, or shorts.',
    material: '100% Organic Cotton\nPremium quality fabric with 220 GSM\nPre-shrunk to maintain fit\nEco-friendly dyes used',
    care: 'Machine wash cold with similar colors\nDo not bleach\nTumble dry low\nIron medium heat if needed\nDo not dry clean',
    shipping: 'Free shipping on orders above ₹999\nEstimated delivery: 3-5 business days\nEasy 15-day returns\nCash on delivery available',
  },
  { 
    id: 2, 
    name: 'Washed Hoodie', 
    price: 1299, 
    originalPrice: 1999, 
    category: 'men', 
    subcategory: 'hoodies',
    image: '/src/assets/images/product-2.jpg',
    images: [
      '/src/assets/images/product-2.jpg',
      '/src/assets/images/product-2-alt.jpg',
    ],
    isNew: true,
    rating: 4.8,
    reviewCount: 89,
    colors: ['Washed Black', 'Washed Grey', 'Beige'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    description: 'Cozy meets style with our washed hoodie. Features a relaxed fit, kangaroo pocket, and adjustable drawstring hood. The garment-washed finish gives it a vintage, lived-in feel.',
    material: '80% Cotton, 20% Polyester\nFleece lining for warmth\n350 GSM heavy weight fabric',
    care: 'Machine wash cold\nWash inside out\nTumble dry low\nDo not iron directly on print',
    shipping: 'Free shipping on orders above ₹999\nEstimated delivery: 3-5 business days\nEasy 15-day returns',
  },
  { 
    id: 3, 
    name: 'Stripe Shirt', 
    price: 999, 
    originalPrice: 1499, 
    category: 'men', 
    subcategory: 'shirts',
    image: '/src/assets/images/product-3.jpg',
    images: ['/src/assets/images/product-3.jpg'],
    isNew: true,
    rating: 4.3,
    reviewCount: 56,
    colors: ['Blue Stripe', 'Black Stripe', 'Red Stripe'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    description: 'Classic stripe shirt with a modern fit. Perfect for casual Fridays or weekend outings.',
    material: '100% Cotton\nPremium quality Oxford fabric',
    care: 'Machine wash cold\nTumble dry low\nIron medium heat',
    shipping: 'Free shipping on orders above ₹999\nEstimated delivery: 3-5 business days',
  },
  { 
    id: 4, 
    name: 'Cargo Pants', 
    price: 1199, 
    originalPrice: 1799, 
    category: 'men', 
    subcategory: 'pants',
    image: '/src/assets/images/product-4.jpg',
    images: ['/src/assets/images/product-4.jpg'],
    isNew: true,
    rating: 4.6,
    reviewCount: 234,
    colors: ['Olive', 'Black', 'Khaki'],
    sizes: ['28', '30', '32', '34', '36', '38'],
    inStock: true,
    description: 'Functional meets fashion with our cargo pants. Multiple pockets and relaxed fit.',
    material: '98% Cotton, 2% Elastane\nStretch fabric for comfort',
    care: 'Machine wash cold\nDo not bleach\nTumble dry low',
    shipping: 'Free shipping on orders above ₹999\nEstimated delivery: 3-5 business days',
  },
  { 
    id: 5, 
    name: 'Graphic Tee', 
    price: 899, 
    originalPrice: 1299, 
    category: 'men', 
    subcategory: 't-shirts',
    image: '/src/assets/images/product-5.jpg',
    images: ['/src/assets/images/product-5.jpg'],
    isNew: false,
    rating: 4.4,
    reviewCount: 312,
    colors: ['White', 'Black', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    description: 'Express yourself with our artistic graphic tees. Unique designs with premium prints.',
    material: '100% Cotton\nDirect-to-garment printing',
    care: 'Machine wash cold inside out\nDo not iron directly on print\nLine dry recommended',
    shipping: 'Free shipping on orders above ₹999\nEstimated delivery: 3-5 business days',
  },
];

// Related products function
export const getRelatedProducts = (currentProductId, limit = 5) => {
  return products.filter(p => p.id !== currentProductId).slice(0, limit);
};

// Get product by ID
export const getProductById = (id) => {
  return products.find(p => p.id === parseInt(id));
};

// Get products by category
export const getProductsByCategory = (category) => {
  return products.filter(p => p.category === category);
};

// New arrivals (products with isNew = true)
export const getNewArrivals = () => {
  return products.filter(p => p.isNew === true);
};

// Featured products
export const getFeaturedProducts = () => {
  return products.slice(0, 4);
};

// Homepage products (for quick display)
export const homepageProducts = products.map(p => ({
  id: p.id,
  name: p.name,
  price: p.price,
  originalPrice: p.originalPrice,
  image: p.image,
  isNew: p.isNew,
  rating: p.rating,
}));
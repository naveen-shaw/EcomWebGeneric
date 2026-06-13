// src/constants/categories.js

export const categories = [
  { 
    id: 1, 
    name: 'MEN', 
    slug: 'men',
    image: '/src/assets/images/men-category.jpg',
    description: 'Explore our men\'s collection'
  },
  { 
    id: 2, 
    name: 'WOMEN', 
    slug: 'women',
    image: '/src/assets/images/women-category.jpg',
    description: 'Explore our women\'s collection'
  },
  { 
    id: 3, 
    name: 'HOODIES', 
    slug: 'hoodies',
    image: '/src/assets/images/hoodies-category.jpg',
    description: 'Cozy hoodies for every season'
  },
  { 
    id: 4, 
    name: 'BOTTOMWEAR', 
    slug: 'bottomwear',
    image: '/src/assets/images/bottomwear-category.jpg',
    description: 'Comfortable pants and shorts'
  },
];

export const shopCategories = [
  { id: 1, name: 'All Products', slug: 'all' },
  { id: 2, name: 'T-Shirts', slug: 't-shirts' },
  { id: 3, name: 'Hoodies', slug: 'hoodies' },
  { id: 4, name: 'Shirts', slug: 'shirts' },
  { id: 5, name: 'Pants', slug: 'pants' },
  { id: 6, name: 'Accessories', slug: 'accessories' },
];

// Get category by slug
export const getCategoryBySlug = (slug) => {
  return categories.find(c => c.slug === slug);
};
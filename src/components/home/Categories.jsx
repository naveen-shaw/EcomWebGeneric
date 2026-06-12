import React from 'react';
import Button from '../common/Button';

const categories = [
  { name: 'MEN', image: '/src/assets/images/men-category.jpg', link: '/men' },
  { name: 'WOMEN', image: '/src/assets/images/women-category.jpg', link: '/women' },
  { name: 'HOODIES', image: '/src/assets/images/hoodies-category.jpg', link: '/hoodies' },
  { name: 'BOTTOMWEAR', image: '/src/assets/images/bottomwear-category.jpg', link: '/bottomwear' },
];

const Categories = () => {
  return (
    <section className="py-16 px-4">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-100">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-white text-xl font-bold mb-3">{category.name}</h3>
                <Button variant="outline" className="bg-white/90 hover:bg-white">
                  SHOP NOW
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
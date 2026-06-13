// src/components/product/ProductGallery.jsx
import React, { useState } from 'react';

const ProductGallery = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  // If only one image, duplicate it for demo
  const galleryImages = images.length >= 4 ? images : [...images, ...images, ...images, ...images].slice(0, 4);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto md:max-h-[500px]">
        {galleryImages.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === index ? 'border-black' : 'border-gray-200 hover:border-gray-400'
            }`}
          >
            <img src={img} alt={`${productName} view ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 bg-gray-100 rounded-2xl overflow-hidden aspect-square">
        <img
          src={galleryImages[selectedImage]}
          alt={productName}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
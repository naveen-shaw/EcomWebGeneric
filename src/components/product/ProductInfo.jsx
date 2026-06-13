// src/components/product/ProductInfo.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductInfo = ({
  product,
  selectedSize,
  setSelectedSize,
  selectedColor,
  setSelectedColor,
  quantity,
  setQuantity,
  onAddToCart,
  onBuyNow,
  onAddToWishlist,
  isInCart,
  isInWishlist,
}) => {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div>
      {/* Badge */}
      {discount > 0 && (
        <span className="inline-block bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {discount}% OFF
        </span>
      )}

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{product.name}</h1>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-3">
        <span className="text-3xl font-bold">₹{product.price}</span>
        {product.originalPrice > product.price && (
          <>
            <span className="text-gray-400 line-through text-lg">₹{product.originalPrice}</span>
            <span className="text-green-600 text-sm font-medium">You save ₹{product.originalPrice - product.price}</span>
          </>
        )}
      </div>
      <p className="text-sm text-gray-500 mt-1">Inclusive of all taxes</p>

      {/* Rating */}
      <div className="flex items-center gap-2 mt-4">
        <div className="flex text-yellow-400">
          {'★'.repeat(Math.floor(product.rating))}
          {'☆'.repeat(5 - Math.floor(product.rating))}
        </div>
        <span className="text-sm text-gray-600">({product.reviewCount} reviews)</span>
      </div>

      {/* Color Selection */}
      {product.colors && (
        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold">COLOR:</span>
            <span className="text-sm text-gray-500">{selectedColor || 'Select color'}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 rounded-full text-sm border transition-all ${
                  selectedColor === color
                    ? 'border-black bg-black text-white'
                    : 'border-gray-300 hover:border-black'
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Size Selection */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-3">
          <span className="font-semibold">SIZE:</span>
          <button className="text-sm text-gray-500 hover:text-black underline">
            SIZE GUIDE
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-12 h-12 rounded-full border text-sm font-medium transition-all ${
                selectedSize === size
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 hover:border-black'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div className="mt-6">
        <span className="font-semibold mb-3 block">QUANTITY:</span>
        <div className="flex items-center border border-gray-300 rounded w-fit">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 hover:bg-gray-100 transition-colors"
          >
            -
          </button>
          <span className="w-12 text-center">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 hover:bg-gray-100 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Stock Status */}
      {product.inStock ? (
        <p className="text-green-600 text-sm mt-4">✓ In Stock | Ready to Ship</p>
      ) : (
        <p className="text-red-500 text-sm mt-4">✗ Out of Stock</p>
      )}

      {/* Action Buttons */}
      <div className="mt-8 space-y-3">
        <button
          onClick={onAddToCart}
          disabled={isInCart}
          className={`w-full py-4 font-semibold rounded-full transition-all ${
            isInCart
              ? 'bg-green-600 text-white cursor-default'
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          {isInCart ? 'ADDED TO CART ✓' : 'ADD TO CART'}
        </button>
        
        <button
          onClick={onBuyNow}
          disabled={!product.inStock}
          className="w-full py-4 font-semibold rounded-full border-2 border-black hover:bg-black hover:text-white transition-all"
        >
          BUY IT NOW
        </button>

        <div className="flex gap-4">
          <button
            onClick={onAddToWishlist}
            className={`flex-1 py-3 font-medium rounded-full border transition-all flex items-center justify-center gap-2 ${
              isInWishlist
                ? 'border-red-500 text-red-500'
                : 'border-gray-300 hover:border-black'
            }`}
          >
            ♥ {isInWishlist ? 'IN WISHLIST' : 'ADD TO WISHLIST'}
          </button>
          
          <button className="px-6 py-3 font-medium rounded-full border border-gray-300 hover:border-black transition-all">
            📤 SHARE
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
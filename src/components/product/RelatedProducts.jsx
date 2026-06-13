// src/components/product/RelatedProducts.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../features/cart/cartSlice';
import { addToWishlist } from '../../features/wishlist/wishlistSlice';

const RelatedProducts = ({ relatedProducts, currentProductId }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isInCart = (id) => cartItems.some(item => item.id === id);
  const isInWishlist = (id) => wishlistItems.some(item => item.id === id);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="mt-12 md:mt-16 pt-8 border-t border-gray-200">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">RELATED PRODUCTS</h2>
          <p className="text-gray-500 text-sm mt-1">Complete your look with these essentials</p>
        </div>
        <Link to="/products" className="text-sm font-medium hover:underline">
          VIEW ALL →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {relatedProducts.map((product) => (
          <div key={product.id} className="group">
            <Link to={`/product/${product.id}`}>
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (!isInCart(product.id)) {
                        dispatch(addToCart({ ...product, quantity: 1 }));
                      }
                    }}
                    className={`px-3 py-1.5 text-xs font-medium rounded ${
                      isInCart(product.id) ? 'bg-green-600 text-white' : 'bg-white text-black'
                    }`}
                  >
                    {isInCart(product.id) ? 'ADDED' : 'ADD TO CART'}
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (!isInWishlist(product.id)) {
                        dispatch(addToWishlist(product));
                      }
                    }}
                    className={`px-3 py-1.5 text-xs font-medium rounded ${
                      isInWishlist(product.id) ? 'bg-red-500 text-white' : 'bg-white text-black'
                    }`}
                  >
                    ♥
                  </button>
                </div>
              </div>
              <h4 className="font-medium text-sm">{product.name}</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-semibold">₹{product.price}</span>
                <span className="text-gray-400 line-through text-xs">₹{product.originalPrice}</span>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-xs text-gray-500">{product.rating}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-2xl p-6 text-center">
        <h3 className="font-semibold text-lg">FREE SHIPPING ON ALL ORDERS ABOVE ₹999</h3>
        <p className="text-gray-500 text-sm mt-1">Shop worry-free and enjoy fast delivery on us.</p>
      </div>
    </div>
  );
};

export default RelatedProducts;
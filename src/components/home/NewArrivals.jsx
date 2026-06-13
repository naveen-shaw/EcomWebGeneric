// src/components/home/NewArrivals.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import SectionHeading from '../common/SectionHeading';
import { addToCart } from '../../features/cart/cartSlice';
import { addToWishlist } from '../../features/wishlist/wishlistSlice';
import { homepageProducts } from '../../constants/products'; // Import from constants

const NewArrivals = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isInCart = (productId) => cartItems.some(item => item.id === productId);
  const isInWishlist = (productId) => wishlistItems.some(item => item.id === productId);

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isInCart(product.id)) {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const handleAddToWishlist = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isInWishlist(product.id)) {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="container-custom">
        <SectionHeading title="NEW ARRIVALS" viewAllLink="/newarrivals" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {homepageProducts.map((product) => (
            <Link 
              key={product.id} 
              to={`/product/${product.id}`}
              className="group block"
            >
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded z-10">
                    NEW
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    onClick={(e) => handleAddToCart(e, product)}
                    className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                      isInCart(product.id) 
                        ? 'bg-green-600 text-white cursor-default' 
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                    disabled={isInCart(product.id)}
                  >
                    {isInCart(product.id) ? 'ADDED' : 'ADD TO CART'}
                  </button>
                  <button
                    onClick={(e) => handleAddToWishlist(e, product)}
                    className={`px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                      isInWishlist(product.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                  >
                    ♥
                  </button>
                </div>
              </div>
              <h4 className="font-medium">{product.name}</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-semibold">₹{product.price}</span>
                <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
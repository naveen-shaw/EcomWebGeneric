import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { addToCart } from '../../features/cart/cartSlice';
import { addToWishlist } from '../../features/wishlist/wishlistSlice';

const products = [
  { id: 1, name: 'Oversized Tee', price: 799, originalPrice: 1299, image: '/src/assets/images/product-1.jpg', isNew: true },
  { id: 2, name: 'Washed Hoodie', price: 1299, originalPrice: 1999, image: '/src/assets/images/product-2.jpg', isNew: true },
  { id: 3, name: 'Stripe Shirt', price: 999, originalPrice: 1499, image: '/src/assets/images/product-3.jpg', isNew: true },
  { id: 4, name: 'Cargo Pants', price: 1199, originalPrice: 1799, image: '/src/assets/images/product-4.jpg', isNew: true },
  { id: 5, name: 'Graphic Tee', price: 899, originalPrice: 1299, image: '/src/assets/images/product-5.jpg', isNew: false },
];

const NewArrivals = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isInCart = (productId) => cartItems.some(item => item.id === productId);
  const isInWishlist = (productId) => wishlistItems.some(item => item.id === productId);

  const handleAddToCart = (product) => {
    if (!isInCart(product.id)) {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const handleAddToWishlist = (product) => {
    if (!isInWishlist(product.id)) {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="container-custom">
        <SectionHeading title="NEW ARRIVALS" viewAllLink="/newarrivals" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">NEW</span>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`px-3 py-1.5 text-xs font-medium rounded ${
                      isInCart(product.id) 
                        ? 'bg-green-600 text-white cursor-default' 
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                    disabled={isInCart(product.id)}
                  >
                    {isInCart(product.id) ? 'ADDED' : 'ADD TO CART'}
                  </button>
                  <button
                    onClick={() => handleAddToWishlist(product)}
                    className={`px-3 py-1.5 text-xs font-medium rounded ${
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
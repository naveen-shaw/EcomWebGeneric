// src/pages/ProductDetails/ProductDetailsPage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useScrollToTop from '../../hooks/useScrollToTop';
import ProductGallery from '../../components/product/ProductGallery';
import ProductInfo from '../../components/product/ProductInfo';
import ProductTabs from '../../components/product/ProductTabs';
import RelatedProducts from '../../components/product/RelatedProducts';
import { addToCart } from '../../features/cart/cartSlice';
import { addToWishlist } from '../../features/wishlist/wishlistSlice';
import { getProductById, getRelatedProducts } from '../../constants/products'; // Import from constants

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Use the custom hook - page will scroll to top automatically
  useScrollToTop(); // Simple usage
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  // Get product from constants
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id, 5);
  
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const isInCart = cartItems.some(item => item.id === product?.id);
  const isInWishlist = wishlistItems.some(item => item.id === product?.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    dispatch(addToCart({ ...product, quantity, selectedSize, selectedColor }));
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    dispatch(addToCart({ ...product, quantity, selectedSize, selectedColor }));
    navigate('/checkout');
  };

  const handleAddToWishlist = () => {
    if (!isInWishlist) {
      dispatch(addToWishlist(product));
    }
  };

  if (!product) {
    return (
      <div className="container-custom py-20 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button onClick={() => navigate('/')} className="mt-4 bg-black text-white px-6 py-2">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      {/* <div className="bg-gray-50 py-3 border-b">
        <div className="container-custom">
          <div className="text-sm text-gray-500">
            <span className="hover:text-black cursor-pointer" onClick={() => navigate('/')}>Home</span>
            {' > '}
            <span className="hover:text-black cursor-pointer" onClick={() => navigate(`/${product.category}`)}>
              {product.category.toUpperCase()}
            </span>
            {' > '}
            <span className="hover:text-black cursor-pointer" onClick={() => navigate(`/${product.subcategory}`)}>
              {product.subcategory.toUpperCase()}
            </span>
            {' > '}
            <span className="text-black font-medium">{product.name}</span>
          </div>
        </div>
      </div> */}

      {/* Product Section */}
      <div className="container-custom py-8 md:py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <ProductGallery images={product.images} productName={product.name} />
          
          <ProductInfo
            product={product}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            quantity={quantity}
            setQuantity={setQuantity}
            onAddToCart={handleAddToCart}
            onBuyNow={handleBuyNow}
            onAddToWishlist={handleAddToWishlist}
            isInCart={isInCart}
            isInWishlist={isInWishlist}
          />
        </div>

        <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} product={product} />
        <RelatedProducts relatedProducts={relatedProducts} currentProductId={product.id} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
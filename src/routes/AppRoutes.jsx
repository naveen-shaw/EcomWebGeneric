// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/Home/HomePage';
import ProductDetailsPage from '../pages/ProductDetails/ProductDetailsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="product/:id" element={<ProductDetailsPage />} />
        {/* Future routes will be added here */}
        {/* <Route path="wishlist" element={<WishlistPage />} /> */}
        {/* <Route path="cart" element={<CartPage />} /> */}
        {/* <Route path="checkout" element={<CheckoutPage />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
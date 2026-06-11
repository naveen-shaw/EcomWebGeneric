import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/Home/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        {/* Future routes will be added here */}
        {/* <Route path="wishlist" element={<WishlistPage />} /> */}
        {/* <Route path="product/:id" element={<ProductDetailsPage />} /> */}
        {/* <Route path="checkout" element={<CheckoutPage />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
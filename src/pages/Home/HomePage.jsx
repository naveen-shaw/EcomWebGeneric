import React from 'react';
import Hero from '../../components/home/Hero';
import Features from '../../components/home/Features';
import Categories from '../../components/home/Categories';
import NewArrivals from '../../components/home/NewArrivals';
import SaleBanner from '../../components/home/SaleBanner';
import Newsletter from '../../components/home/Newsletter';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <NewArrivals />
      <SaleBanner />
      <Newsletter />
    </>
  );
};

export default HomePage;
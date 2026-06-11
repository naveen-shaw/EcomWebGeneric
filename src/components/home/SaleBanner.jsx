import React from 'react';
import Button from '../common/Button';

const SaleBanner = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container-custom text-center">
        <span className="text-sm tracking-wider text-gray-300">LIMITED TIME ONLY</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mt-4 mb-2">
          SUMMER <span className="text-gray-400">SALE</span>
        </h2>
        <div className="text-5xl md:text-7xl font-bold mb-4">UP TO 40% OFF</div>
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
          SHOP NOW
        </Button>
      </div>
    </section>
  );
};

export default SaleBanner;
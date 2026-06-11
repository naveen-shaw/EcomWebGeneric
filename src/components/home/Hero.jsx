import React from 'react';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-r from-gray-50 to-white">
      <div className="container-custom">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-wider text-gray-500">NEW COLLECTION</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mt-4 mb-6">
            BUILT FOR <br /> EVERYDAY
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Timeless pieces. Modern comfort. Designed to move with you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">SHOP MEN</Button>
            <Button variant="outline">SHOP WOMEN</Button>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3">
        <div className="aspect-square bg-gray-100 rounded-full blur-3xl opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;
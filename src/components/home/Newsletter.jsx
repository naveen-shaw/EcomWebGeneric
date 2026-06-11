import React, { useState } from 'react';
import Button from '../common/Button';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing! Get 10% off on your first order.`);
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom max-w-2xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">SIGNUP & GET 10% OFF</h2>
        <p className="text-gray-500 mb-6">on your first order</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
            required
          />
          <Button type="submit" variant="primary">SUBSCRIBE</Button>
        </form>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-400 mb-4">#URBANXCOMMUNITY</p>
          <p className="text-gray-500">Follow us and get inspired.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-black">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-black">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-black">Facebook</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
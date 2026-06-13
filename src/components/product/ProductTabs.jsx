// src/components/product/ProductTabs.jsx
import React from 'react';

const ProductTabs = ({ activeTab, setActiveTab, product }) => {
  const tabs = [
    { id: 'description', label: 'DESCRIPTION' },
    { id: 'material', label: 'MATERIAL & CARE' },
    { id: 'shipping', label: 'SHIPPING & RETURNS' },
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'description':
        return (
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="border-l-4 border-black pl-4">
                <p className="text-sm text-gray-500">Premium Quality</p>
                <p className="font-medium">Finest materials</p>
              </div>
              <div className="border-l-4 border-black pl-4">
                <p className="text-sm text-gray-500">Easy Returns</p>
                <p className="font-medium">Hassle free returns</p>
              </div>
            </div>
          </div>
        );
      case 'material':
        return (
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Material</h4>
              <p className="text-gray-700 whitespace-pre-line">{product.material}</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Care Instructions</h4>
              <p className="text-gray-700 whitespace-pre-line">{product.care}</p>
            </div>
          </div>
        );
      case 'shipping':
        return (
          <div className="space-y-4">
            <p className="text-gray-700 whitespace-pre-line">{product.shipping}</p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="font-semibold">Need help?</p>
              <p className="text-gray-600 text-sm mt-1">
                Contact our customer support at <strong>support@urbanx.com</strong> or call <strong>1800-123-4567</strong>
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mt-12 md:mt-16">
      <div className="border-b border-gray-200">
        <div className="flex flex-wrap gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'border-b-2 border-black text-black'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="py-6 md:py-8">{getTabContent()}</div>
    </div>
  );
};

export default ProductTabs;
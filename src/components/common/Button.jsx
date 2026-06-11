import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'px-6 py-3 font-medium transition-all duration-200 inline-block text-center';
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
    secondary: 'bg-gray-100 text-black hover:bg-gray-200',
  };
  
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string; // If the button acts as a link
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', href, className, ...props }) => {
  const baseStyles = "px-6 py-3 font-semibold rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  let variantStyles = "";
  switch (variant) {
    case 'primary':
      variantStyles = "bg-champagne-gold text-cream hover:bg-muted-gold focus:ring-champagne-gold";
      break;
    case 'secondary':
      variantStyles = "bg-deep-green text-cream hover:bg-opacity-80 focus:ring-deep-green";
      break;
    case 'outline':
      variantStyles = "bg-transparent text-champagne-gold border-2 border-champagne-gold hover:bg-champagne-gold hover:text-cream focus:ring-champagne-gold";
      break;
  }

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles} ${className || ''} inline-block text-center`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;


import React from 'react';
import { Product } from '../types';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105 border border-light-gray">
      <div className="relative w-full h-72 sm:h-80 md:h-96">
        <img 
          src={product.imageUrl} 
          alt={product.altText} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-display font-semibold text-dark-slate mb-2">{product.name}</h3>
        <p className="text-gray-600 font-body text-sm mb-4 flex-grow">{product.description}</p>
        <div className="mt-auto">
          <p className="text-2xl font-semibold text-champagne-gold mb-4">{product.price}</p>
          <Button variant="secondary" className="w-full">
            Ajouter au Panier
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

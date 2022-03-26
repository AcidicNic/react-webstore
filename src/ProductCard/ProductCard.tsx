/**
 * ProductCard.tsx
 */
import React from 'react';
import './ProductCard.css';

export default function ProductCard(props: { product: { 
  id: number, name: string, description: string, category: string, price: string, rating: number, units: number
} } ) {
  const { product } = props;
  return (
    <div className='productCard col-4 row-4'>
        <div className='card m-1'>
          <div className='card-body'>
            <h4 className='productCardTitle card-title'>{ product.name }</h4>
            <p className='productCardDesc card-text'>{ product.description }</p>
            <span className='productCardCat card-text text-muted'>{ product.category }</span>
            
            
          </div>
          <div className='card-footer d-flex flex-row justify-content-between align-items-center'>
            <div>{ product.price }</div><a className='btn btn-sm btn-dark' href='/'>Details</a>
          </div>
        </div>
      </div>
  );
}

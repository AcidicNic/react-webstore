/**
 * ProductCard.tsx
 */
import React from 'react';

import StarRating from './StarRating';

export default function ProductCard(props: { 
  product: { 
    id: number, name: string, description: string, category: string, price: string, rating: number, units: number
  }
}) {
  const { product } = props;
  return (
    <div className='productCard col-4 row-4'>
        <div className='card m-1'>
          <div className='card-body'>
            <h4 className='card-title'>{ product.name }</h4>
            <p className='card-text'>{ product.description }</p>
            <span className='card-text text-muted'>{ product.category }</span>
          </div>
          <div className='card-footer d-flex flex-row justify-content-between align-items-center'>
            <div className='d-flex flex-row'>
              <StarRating rating={product.rating}/> <div className='mx-1 text-bold'>({`${product.rating}`})</div>
            </div>
            <div className='d-flex flex-row justify-content-between align-items-center'>
              <div className='mx-2'>{ product.price }</div><a className='btn btn-sm btn-dark' href='/'>Buy</a>
            </div>
          </div>
        </div>
      </div>
  );
}

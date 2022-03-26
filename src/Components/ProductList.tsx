/**
 * ProductList.tsx
 */
import React from 'react';

import ProductCard from './ProductCard';

export default function ProductList(props: { 
  productData: {
    id: number, name: string, description: string, category: string, price: string, rating: number, units: number
  }[], 
  category: string 
}) {
  const { productData, category } = props;

  return (
    <div className='m-4 d-flex flex-row flex-wrap justify-content-evenly'>
      {
        productData.filter( (product) => product.category === category || category === 'All')
        .map( (product) => (
          <ProductCard product={product} />
        ))
      }
    </div>
  )
}
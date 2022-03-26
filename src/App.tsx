/**
 * App.tsx
 */
import React, { useState } from 'react';

import CategoryButton from './Components/CategoryButton';
import ProductCard from './Components/ProductCard';

// Challenge 7 - Import your exported data into the App component.
import productData, { uniqueCategories, categoryCount, categoryNameCount } from './data/data';


export default function App() {

  const [category, setCategory] = useState('All')

  return (
    <div className='App mx-4'>
      <div className='categoriesWrapper mx-auto mt-4 d-flex flex-row flex-wrap justify-content-center'>
        {/* Challenge 8 - Display the categories as buttons. */}
        <CategoryButton category={{name: "All", count: -1}} onClick={setCategory} selected={category === 'All'} />
        {categoryNameCount.map( (categoryDetails) => (
          <CategoryButton category={categoryDetails} onClick={setCategory} selected={categoryDetails.name === category} />
        ))}
      </div>
      <div className='productsWrapper mx-auto mt-4 d-flex flex-row flex-wrap justify-content-evenly'>
        {/* Challenge 9 - Display the products. Challenge 10 - Add some interaction and functionality. */}
        {productData.filter( (product) => product.category === category || category === 'All')
        .map( (product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

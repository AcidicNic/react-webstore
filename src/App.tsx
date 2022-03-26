/**
 * App.tsx
 */
import React from 'react';
import './App.css';

import CategoryButton from './CategoryButton/CategoryButton';
import ProductCard from './ProductCard/ProductCard';

// Challenge 7 - Import your exported data into the App component.
import data, { uniqueCategories, categoryCount, categoryNameCount } from './data/data';

function App() {
  return (
    <div className="App mx-4">
      <div className="categoriesWrapper mx-auto mt-4 d-flex flex-row flex-wrap justify-content-center">
        {/* Challenge 8 - Display the categories as buttons. */}
        {categoryNameCount.map((categoryDetails) => (
          <CategoryButton category={categoryDetails} />
        ))}
      </div>
      <div className="productsWrapper mx-auto mt-4 d-flex flex-row flex-wrap justify-content-evenly">
        {/* Challenge 9 - Display the products. */}
        {data.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;

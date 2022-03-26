/**
 * App.tsx
 */
import React, { useState } from 'react';

import Title from './Components/Title';
import CategoryButtonList from './Components/CategoryButtonList';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';

// Challenge 7 - Import your exported data into the App component.
import productData, { categoryNameCount } from './data/data';

export default function App() {

  const [category, setCategory] = useState('All')

  return (
    <div className='App mx-4'>

      <Title />

      <CategoryButtonList categoryNameCount={categoryNameCount} category={category} setCategory={setCategory} />

      <ProductList productData={productData} category={category} />

      <Footer />

    </div>
  );
}

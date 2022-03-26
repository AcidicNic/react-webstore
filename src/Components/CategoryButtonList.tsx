/**
 * CategoryButtonList.tsx
 */
import React from 'react';

import CategoryButton from './CategoryButton';

export default function CategoryButtonList(props: { 
  categoryNameCount: { name: string, count: number }[], 
  category: string, 
  setCategory: Function,
}) {
  const { categoryNameCount, category, setCategory } = props;

  return (
    <div className='m-4 d-flex flex-row flex-wrap justify-content-center user-select-none'>
      <CategoryButton category={{name: "All", count: -1}} onClick={setCategory} selected={category === 'All'} />
      {
        categoryNameCount.map( (categoryDetails) => (
          <CategoryButton category={categoryDetails} onClick={setCategory} selected={categoryDetails.name === category} />
        ))
      }
    </div>
  )
}
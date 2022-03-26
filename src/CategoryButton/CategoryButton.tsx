/**
 * CategoryButton.tsx
 */
import React from 'react';
import './CategoryButton.css';

export default function CategoryButton(props: { category: { name: string, count: number } } ) {
  const { category } = props;

  return (
    <div className="categoryBtn btn btn-sm btn-dark m-1">{`${category.name} (${category.count})`}</div>
  );
}

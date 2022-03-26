/**
 * CategoryButton.tsx
 */
import React from 'react';

export default function CategoryButton(props: {
  category: { name: string, count: number },
  onClick: Function, selected: boolean 
}) {
  const { category, onClick, selected } = props;

  let countStr = '';
  if (category.count > 0) {
    countStr = ` (${category.count})`;
  }

  let btnColor = 'dark';
  if (selected) {
    btnColor = 'secondary';
  }

  return (
    <div
      className={`categoryBtn btn btn-sm btn-${btnColor} m-1`} 
      onClick={() => onClick(category.name)}
    >{`${category.name}${countStr}`}</div>
  );
}

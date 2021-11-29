import './FilterBar.css';
import React from 'react';

const FilterBar = () => {
  return (
    <div className="filter-bar ui input">
      <input type="text" placeholder="Start typing to filter spells" />
    </div>
  );
}

export default FilterBar;
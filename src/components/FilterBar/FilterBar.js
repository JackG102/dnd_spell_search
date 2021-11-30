import './FilterBar.css';
import React from 'react';

const FilterBar = ({ filterBarText, setFilterBarText }) => {
  return (
    <div className="filter-bar ui input">
      <input
        value={filterBarText}
        onChange={e => setFilterBarText(e.target.value)}
        type="text" 
        placeholder="Start typing to filter spells" 
      />
    </div>
  );
}

export default FilterBar;
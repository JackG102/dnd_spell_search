import './SpellSearchPage.css';
import React, { useState } from 'react';
import ApiAccordion from '../components/ApiAccordion/ApiAccordion';
import FilterBar from '../components/FilterBar/FilterBar';

const SpellSearchPage = ({spellIndex, setSpellIndex}) => {
  const [filterBarText, setFilterBarText] = useState('');

  console.log(spellIndex);

  const renderedSpellList = spellIndex.filter((spell) => {
    console.log(filterBarText);
    if (!filterBarText) return true;
    if (spell.name.toLowerCase().includes(filterBarText.toLowerCase())) {
      return true;
    }
  }).map((spell) => { 
    return(
      <ApiAccordion 
        spell={spell}
        key={spell.index}
      />
    );
  });

  return(
    <div className="page--spell-search">
      <h1>Spell Search Page</h1>
      <div className="filter--spell-search">
        <FilterBar 
          filterBarText={filterBarText}
          setFilterBarText={setFilterBarText}
        />
      </div>

      <div className="list--spell-search">
        {renderedSpellList}
      </div>
    </div>
  );
}

export default SpellSearchPage;
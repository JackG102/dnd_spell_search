import './SpellSearchPage.css';
import React from 'react';

const SpellSearchPage = ({spellIndex, setSpellIndex}) => {
  console.log(spellIndex);
  const renderedSpellList = spellIndex.map((spell) => { 
    console.log(spell.name);
    return <span>{spell.name}</span>;
    
  });
  return(
    <div className="page--spell-search">
      <h1>Spell Search Page</h1>
      <div className="list--spell-search">
        {renderedSpellList}
      </div>
    </div>
  );
}

export default SpellSearchPage;
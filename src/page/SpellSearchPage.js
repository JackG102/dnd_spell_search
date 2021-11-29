import './SpellSearchPage.css';
import React from 'react';
import ApiAccordion from '../components/ApiAccordion/ApiAccordion';

const SpellSearchPage = ({spellIndex, setSpellIndex}) => {
  console.log(spellIndex);
  const renderedSpellList = spellIndex.map((spell) => { 
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
      <div className="list--spell-search">
        {renderedSpellList}
      </div>
    </div>
  );
}

export default SpellSearchPage;
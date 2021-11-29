import './ApiAccordion.css';
import React, { useState } from 'react';
import axios from 'axios';

const ApiAccordion = ({spell}) => {

  const [spellProperties, setSpellProperties] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const fetchSpell = () => {
    console.log('fun');
    if (!isFetched && !isExpanded) {
      const fetchSpellProperties = async () => {
        await axios.get('https://www.dnd5eapi.co/api/spells/' + spell.index).then(response => {
          console.log(response);
          setSpellProperties(response.data);
          setIsFetched(true);
          setIsExpanded(true);
        });
      }

      fetchSpellProperties();
    } else if (isFetched && isExpanded) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  }

  return(
    <div className="api-accordion">
      <div className="api-accordion--header">
        <span>{spell.name}</span>
        <button 
          className="ui button green"
          onClick={fetchSpell}
        >
          { isExpanded ? 'Minimize' : 'Read More' }
        </button>
      </div>
      <div className={`api-accordion--body ${isExpanded ? 'api-accordion--visible' : 'api-accordion--hidden'}`}>
        { isFetched ? <p>{spellProperties.desc}</p> : null }
      </div>
    </div>
  );
}

export default ApiAccordion;
import './ApiAccordion.css';
import React, { useState } from 'react';
import axios from 'axios';

const ApiAccordion = ({spell}) => {

  const [spellProperties, setSpellProperties] = useState([]);
  const [isFetched, setIsFetched] = useState(false);

  const fetchSpell = () => {
    console.log('fun');
    const fetchSpellProperties = async () => {
      await axios.get('https://www.dnd5eapi.co/api/spells/' + spell.index).then(response => {
        console.log(response);
        setSpellProperties(response.data);
        setIsFetched(true);
      });
    }

    fetchSpellProperties();
  }

  return(
    <div className="api-accordion">
      <div className="api-accordion--header">
        <span>{spell.name}</span>
        <button 
          className="ui button green"
          onClick={fetchSpell}
        >
          Read More
        </button>
      </div>
      <div className="api-accordion--body">
        { isFetched ? <p>{spellProperties.desc}</p> : null }
      </div>
    </div>
  );
}

export default ApiAccordion;
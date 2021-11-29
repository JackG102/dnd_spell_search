import './ApiAccordion.css';
import React from 'react';
import axios from 'axios';

const ApiAccordion = ({spell}) => {
  return(
    <div className="api-accordion">
      <div className="api-accordion--header">
        <span>{spell.name}</span>
        <button className="ui button green">Read More</button>
      </div>
      <div className="api-accordion--body">

      </div>
    </div>
  );
}

export default ApiAccordion;
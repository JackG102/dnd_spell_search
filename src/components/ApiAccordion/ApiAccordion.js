import React from 'react';

const ApiAccordion = ({spell}) => {
  return(
    <div className="api-accordion">
      <div className="api-accordion--header">
        <span>{spell.name}</span>
      </div>
      <div className="api-accordion--body">

      </div>
    </div>
  );
}

export default ApiAccordion;
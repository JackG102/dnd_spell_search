import React from 'react';

const ApiAccordionBody = ({spellProperties}) => {
  console.log(spellProperties);
  
  // Spell Description 
  const renderDescription = spellProperties.desc.map((paragraph) => {
    return (
      <p>{paragraph}</p>
    );
  });

  return (
    <>
      <span><strong>Spell Description:</strong></span>
      {renderDescription}
    </>
  );
}

export default ApiAccordionBody;
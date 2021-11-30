import React from 'react';

const ApiAccordionBody = ({spellProperties}) => {
  console.log(spellProperties);
  
  // Spell Description 
  const renderDescription = spellProperties.desc.map((paragraph) => {
    return (
      <p>{paragraph}</p>
    );
  });

  // Magic Classes
  const renderClasses = spellProperties.classes.map((spellClass) => {
    return (
      <span>{spellClass.name} </span>
    );
  });

  // Spell Components
  const renderComponents = spellProperties.components.map((component) => {
    return (
      <span>{component} </span>
    );
  });

  return (
    <>
      <div>
        <strong>Spell Description:</strong>
        {renderDescription}
      </div>
      <div>
        <strong>Casting Time: </strong>
        {spellProperties.casting_time}
      </div>
      <div>
        <strong>Classes: </strong>
        {renderClasses}
      </div>
      <div>
        <strong>Components: </strong>
        {renderComponents}
      </div>
      { 
      spellProperties.area_of_effect ?
        <div>
          <strong>Area of Effect: </strong>
            {spellProperties.area_of_effect.size}
            {spellProperties.area_of_effect.type}
        </div> 
      : null 
      }
      <div>
        <strong>Duration: </strong>
        {spellProperties.duration}
      </div>
    </>
  );
}

export default ApiAccordionBody;
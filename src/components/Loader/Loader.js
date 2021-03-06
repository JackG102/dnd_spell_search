import React from 'react';
import './Loader.css';

const Loader = () => {
  return(
    <div className="ui segment component--loader">
      <p></p>
      <div className="ui active dimmer">
        <div className="ui loader text">Loading Spells</div>
      </div>
    </div>
  );
}

export default Loader;
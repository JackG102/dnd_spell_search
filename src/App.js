import React, { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import SpellSearchPage from './page/SpellSearchPage';
import axios from 'axios';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [spellIndex, setSpellIndex] = useState([]);
  
  useEffect(() => {
    // For fun, wait a moment so that I can practice conditional rendering.
    // In reality, the api fetch call is really fast, so the loader only renders for a split second
    // I want to practice and use my Loader component, hence the timeout function
    const search = async () => {
      await axios.get('https://www.dnd5eapi.co/api/spells').then(response => {
        setTimeout(() => {
          setSpellIndex(response.data.results);
          setLoading(false);
        }, 1000)
      });
    }

    search();
  }, []);

  return(
    <div className="app-container">
      {
        isLoading 
        ? <Loader /> 
        : <SpellSearchPage 
            spellIndex={spellIndex}
            setSpellIndex={setSpellIndex}
          />
      }
    </div>
  );
};

export default App;
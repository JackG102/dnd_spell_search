import React, { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';
import SpellSearchPage from './page/SpellSearchPage';
import axios from 'axios';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [spellIndexData, setSpellIndex] = useState([]);
  
  useEffect(() => {
    // For fun, create helper function
    const finishedLoading = () => {
      setLoading(false);
    }

    const search = async () => {
      const { data } = await axios.get('https://www.dnd5eapi.co/api/spells');
      // For fun, wait a moment so that I can practice conditional rendering.
      // In reality, the api fetch call is really fast, so the loader only renders for a split second
      // I want to practice and use my Loader component, hence the timeout function
      setTimeout(() => {
        finishedLoading();
      }, 1000)
      console.log(data);
    }
    search();
  }, []);

  return(
    <div className="app-container">
      {isLoading ? <Loader /> : <SpellSearchPage />}
    </div>
  );
};

export default App;
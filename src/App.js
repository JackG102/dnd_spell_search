import React, { useState, useEffect } from 'react';
import Loader from './components/Loader/Loader';

import axios from 'axios';

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const finishedLoading = () => {
      setLoading(false);
    }
    setTimeout(() => {
      finishedLoading();
    }, 1000)
  }, []);

  return(
    <div className="app-container">
      <h1>DnD Search</h1>
      {isLoading ?
      <Loader />
      :
      <p>Done loading</p>}
    </div>
  );
};

export default App;
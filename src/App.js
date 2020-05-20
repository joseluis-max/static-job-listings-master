import React from 'react';
import './App.css';
import data from './data.json';

import FilterBar from './components/filterbar'


function App() {
  return (
    <div className="container-fluid p-0">
      <header className="container-fluid p-0" id="header">
              <FilterBar/>
      </header>
      <div className="container-fluid p-0" id="main">
        
      </div>
    </div>
  );
}

export default App;

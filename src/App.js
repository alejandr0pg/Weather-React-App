import React from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
  "Buenos aires, Ar",
  "Maracaibo, Ve",
  "Bogota, Co",
  "Madrid, Es",
  "Lima, pe"
]

function App() {
  return (
    <div className="App">
      <LocationList cities={cities}/>
    </div>
  );
}

export default App;

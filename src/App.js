import React from 'react';
import WeatherLocation from './components/WeatherLocation';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setCity } from './actions';

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

  handleSelectedLocation = city => {
      this.props.setCity(city);
  }

  return (
    <div className="App">
      <LocationList cities={cities} onClick={handleSelectedLocation} />
    </div>
  );
}

App.propTypes = {
  setCity: PropTypes.func.isRequired,
}

const mapDispathToProps = dispatch => ({
  setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispathToProps)(App);
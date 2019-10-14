import React from 'react';
import WeatherLocation from './components/WeatherLocation';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setCity } from './actions';

import './App.css';

function App() {

  const city = 'Cabudare, VE';
  
  handleSelectedLocation = city => {
      this.props.setCity(city);
  }

  return (
    <div className="App">
      <WeatherLocation city={city} onClick="handleSelectedLocation(city)"></WeatherLocation>
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
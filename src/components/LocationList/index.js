import React from 'react';
import WeatherLocation from '../WeatherLocation';
import PropTypes from 'prop-types';

const citysComponents = cities => (
    cities.map(city => <WeatherLocation key={city} city={city} />)
);

const LocationList = ({ cities }) => {
    console.log("Cities", cities);

    return (
        <div>
            { citysComponents(cities) }
        </div>
    );
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
}

export default LocationList;
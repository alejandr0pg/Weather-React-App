import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { CircularProgress } from '@material-ui/core';
import { PropTypes } from 'prop-types';

import { transformWeather, getCity } from './../../services/transformWeather'
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';

import './styles.scss';

class WeatherLocation extends Component {
    constructor(props) {
        super(props);

        const { city } = props

        // init state
        this.state = {
            city,
            data: null
        };

        console.log('constructor');
    }

    componentDidMount() {
        console.log('componentDidMount');

        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }
    
    componentWillMount() {
        console.log('UNSAFE: componetWillMount');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('UNSAFE: componentWillUpdate');
    }

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);

        fetch(api_weather).then(resolve => (
            resolve.json()
        )).then(data => {
            console.log(data);

            const newWeather = {
                data: transformWeather(data),
                city: getCity(data),
            }

            this.setState(newWeather);
        });
    }

    render() {
        const { city, data } = this.state;

        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                { data ? 
                    <WeatherData data={data}></WeatherData> : 
                    <CircularProgress size={60} />
                }
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
}

export default WeatherLocation;
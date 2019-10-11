import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import { transformWeather, getCity } from './../../services/transformWeather'
import { api_weather } from '../../constants/api_url';
import { SUN } from '../../constants/weathers';

import './styles.scss';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

class WeatherLocation extends Component {
    constructor() {
        super();
        // init state
        this.state = {
            city: 'Barquisimeto',
            data: data
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
        console.log('actualizado');

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
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;
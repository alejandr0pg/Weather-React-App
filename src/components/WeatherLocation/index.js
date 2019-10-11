import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import './styles.scss';
import { SUN } from '../../constants/weathers';

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
    }

    handleUpdateClick = () => {
        console.log('actualizado');

        this.setState({
            city: 'Cabudare'
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
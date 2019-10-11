import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

import './styles.scss';
import { SUN } from '../../constants/weathers';

const location = 'cabudare,ve';
const api_key = '815da8056bf029e19cd6f5acf0ec07da';
const api_url = 'http://api.openweathermap.org/data/2.5/weather';

const api_weather = `${api_url}?q=${location}&appid=${api_key}&units=metric`;

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

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);

        const data = {
            humidity,
            temperature: temp,
            weatherState,
            wind: `${speed} m/s`
        }

        return data;
    }

    getCity = weather_data => {
        const { name } = weather_data;

        return name;
    }

    handleUpdateClick = () => {
        console.log('actualizado');

        fetch(api_weather).then(resolve => (
            resolve.json()
        )).then(data => {
            console.log(data);

            const newWeather = {
                data: this.getData(data),
                city: this.getCity(data),
            }

            this.setState(newWeather);
        });

        // this.setState({
        //     city: 'Cabudare'
        // });
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
import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeaherTemperature';
import { SUN } from './../constants/weathers';

const WeatherData = () => (
    <div>
        <WeatherTemperature temperature={25} weatherState={SUN}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={'12 m/s'}></WeatherExtraInfo>
    </div>
);

export default WeatherData;
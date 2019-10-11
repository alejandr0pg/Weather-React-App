import convert from 'convert-units';
import { SUN } from './../constants/weathers';

const getTemp = (kelvin, to = 'C') => {
    return Number(
        convert(kelvin)
            .from('K')
            .to(to)
            .toFixed(2)
    );
}

const getWeatherState = weather_data => {
    return SUN;
}

export const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data);
    const temperature = getTemp(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    }

    return data;
}

export const getCity = weather_data => {
    const { name } = weather_data;

    return name;
}

export default transformWeather;
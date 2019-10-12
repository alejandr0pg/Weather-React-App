import { api_url, api_key } from './../constants/api_url';

const getUrlWeatherByCity = city => {
    return `${api_url}?q=${city}&appid=${api_key}`;
}

export default getUrlWeatherByCity;
import axios from 'axios';

const API_KEY = '9313b0c13ac53629bda973073afd9846';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`


export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},uy`;
    const request = axios.get(url);
    return{
        type: FETCH_WEATHER, 
        payload: request
    };
}
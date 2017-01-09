import axios from 'axios'

const API_KEY = "e021fe635c175bab454c626452fda64a"
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER' //這樣做的原因是讓 action 和 reducer 保持一致，不會有 typo 的可能。

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url)  /*recieve a promise data*/
  // console.log("Request receive:",request);
  return{
    type: FETCH_WEATHER,
    payload: request /*if detecting as promise structure,
    redux-promise (middleware) will stop the action and passing a new structure to the reducer*/
  }
}

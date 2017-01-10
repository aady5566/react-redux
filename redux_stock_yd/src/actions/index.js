import axios from 'axios'



const GOOGLE_url = "https://www.google.com/finance/getprices"

// const YAHOO_URL = "https://chartapi.finance.yahoo.com/instrument/1.0/"

// const API_KEY = "e021fe635c175bab454c626452fda64a"
// const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// const TPEX_URL = "http://www.tpex.org.tw/web/stock/aftertrading/daily_close_quotes/stk_quote_result.php?l=zh-tw&d=106/01/09"

export const FETCH_DATA = 'FETCH_DATA' //這樣做的原因是讓 action 和 reducer 保持一致，不會有 typo 的可能。
export function fetchData(stock){
  // const url = `${YAHOO_URL}${stock}/chartdata;type=quote;range=7d/json`
  const url = `${GOOGLE_url}?q=${stock}&x=TPE&i=14400&p=1d&f=d,c,v`
  // i=14400&p=1d&f=d,c,h,l,o,v
  // const url = TPEX_URL
  // const url = `${ROOT_URL}&q=${stock},us`
  // console.log(url);
  const request = axios.get(url)  /*recieve a promise data*/
  // console.log("Request receive:",request);
  return{
    type: FETCH_DATA,
    payload: request /*if detecting as promise structure,
    redux-promise (middleware) will stop the action and passing a new structure to the reducer*/
  }
}


export const GET_STOCKNAME = 'GET_STOCKNAME'
export function getStockName(input){
  // console.log("stock in action",input);
  return{
    type: GET_STOCKNAME,
    payload: input
  }
}

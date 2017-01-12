import { combineReducers } from 'redux';
import DataReducer from './reducer_data'
import StockNameReducer from './reducer_stockname'
import GoogleLiveReDucer from './reducer_googlelive'
const rootReducer = combineReducers({
  stocks: DataReducer,
  stockName: StockNameReducer,
  googleLive: GoogleLiveReDucer
});

export default rootReducer;

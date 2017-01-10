import { combineReducers } from 'redux';
import DataReducer from './reducer_data'
import StockNameReducer from './reducer_stockname'
const rootReducer = combineReducers({
  stocks: DataReducer,
  stockName: StockNameReducer
});

export default rootReducer;

import { combineReducers } from 'redux';

import newCount from './reducer_count.js';

const rootReducer = combineReducers({
  count: newCount
});

export default rootReducer;

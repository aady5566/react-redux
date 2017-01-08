import { combineReducers } from 'redux'
import BookReducer from './reducer_books'
import ActiveBook from './reducer_active_book'
const rootReducers = combineReducers({
  /*key for GLOBAL STATE */
  books: BookReducer, /*making a props key called books with the value from the state generator BookReducer*/
  activeBook: ActiveBook 
})

export default rootReducers

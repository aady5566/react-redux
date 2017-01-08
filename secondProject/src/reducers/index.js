import { combineReducers } from 'redux'
import BookReducer from './reducer_books'

const rootReducers = combineReducers({
  books: BookReducer /*making a props key called books with the value from the state generator BookReducer*/
})

export default rootReducers

import { combineReducers } from 'redux'
import BookReducer from './reducer_books'

const rootReducers = combineReducers({
  books: BookReducer
})

export default rootReducers

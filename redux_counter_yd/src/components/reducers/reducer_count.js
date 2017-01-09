import { INCREMENT , DECREMENT } from '../actions/index'

export default (state = 10, action) => {
  switch (action.type) {
    case INCREMENT:
      return action.payload
    case DECREMENT:
      return action.payload
    default:
      return state
  }
}

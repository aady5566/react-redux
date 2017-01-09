import {FETCH_WEATHER} from '../actions/index'
export default function(state=null,action){
  switch(action.type){
    case FETCH_WEATHER:
      console.log("Action receive: ",action); /*redux-promise (middleware) had already done something when passing the request (from ActionCreator) */
      return state
    default:
      return state
  }
}

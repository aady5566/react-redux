import {FETCH_DATA} from '../actions/index'

export default function(state = [],action){ /*setting default empty array*/
  switch(action.type){
    case FETCH_DATA:
      console.log(action.payload);
      // console.log("Action receive: ",action.payload.data); /*redux-promise (middleware) had already done something when passing the request (from ActionCreator) */
      // console.log(action.payload.data);
      // return state.concat([ action.payload.data ]) /*DONT USE stat.push(action.payload.data)，因為這會改變原始的state,然而 concat 會是建構新的 array*/
      // return [ action.payload.data, ...state ] /*和上述一樣 只是 es6的寫法 -> [city, city, city] not [city, [city,city]]*/
      return [ action.payload.data, ...state ]
    default:
      return state
  }
}

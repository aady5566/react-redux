import {GET_STOCKNAME} from '../actions/index'

export default function(state='',action){ /*setting default empty array*/
  switch(action.type){
    case GET_STOCKNAME:
      return [ action.payload, ...state ]
    default:
      return state
  }
}

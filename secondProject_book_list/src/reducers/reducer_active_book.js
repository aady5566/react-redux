// 這裡的並不是 application state, 而是 針對只這個 reducer 狀態變化的 state
// state = null 是預設值，當沒有做出符合 switch case 時的預設值
export default function(state = null, action){
  // js object connect to action/index
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload
    default:
      return state
  }
}

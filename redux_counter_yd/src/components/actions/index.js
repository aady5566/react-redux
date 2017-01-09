export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export function increment(count){
  const c = count + 1
  return{
    type: INCREMENT,
    payload: c
  }
}

export function decrement(count){
  const c = count - 1
  return{
    type: DECREMENT,
    payload: c
  }
}

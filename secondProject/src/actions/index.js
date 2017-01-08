// ActionCreator (state changer)
export function selectBook(book){
  // console.log("Selected Book is : ",book.title);
  return{
    type: 'BOOK_SELECTED',
    payload: book
  }
}

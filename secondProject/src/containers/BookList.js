import React from 'react'
import { connect } from 'react-redux'
class BookList extends React.Component {
  renderList(){
    return(
      /*recognize props from redux which is obtained by from mapStateToProps*/
      this.props.books.map(book =>
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    )
  }
  render () {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}
function mapStateToProps(state){
  /*return props to the component BookList*/
  /*state.book is from the reducers/index.js */
  return{
    books: state.books
  }
}
export default connect(mapStateToProps)(BookList); /*merge redux and react*/

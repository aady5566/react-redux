import React from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index' /*import an action creator*/
import { bindActionCreators } from 'redux'

class BookList extends React.Component {
  renderList(){
    return(
      /*recognize props from redux which is obtained by from mapStateToProps*/
      /*這裡的selectBook是源自於 actions/index.js*/
      this.props.books.map(book =>{
        return(
          <li
            key={book.title}
            onClick={()=>this.props.selectBook(book)}
            className="list-group-item">
            {book.title}
          </li>
        )
      }
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
function mapDispatchToProps(dispatch){
  /*the former 'selectBook' is key and will be return as a prop to the component BookList, the latter is the action creator which is import from action/index.js*/
  /*when action creator is called, the results will be passed to all of the reducers (dispatch) */
  return bindActionCreators({selectBook : selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList); /*merge redux and react*/

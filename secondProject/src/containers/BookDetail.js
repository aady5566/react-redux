import React from 'react'
import { connect } from 'react-redux'

class BookDetail extends React.Component {
  render () {
    if(!this.props.book){
      return <h3>Select a book when getting started</h3>
    }
    return(
      <div>
        <h3>Detail for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    book: state.activeBook //obtaining the props 'book' for the component 'BookDetail' from state 'activeBook' comming from reducers/index.js
  }
}

export default connect(mapStateToProps)(BookDetail); /*merge redux and react*/

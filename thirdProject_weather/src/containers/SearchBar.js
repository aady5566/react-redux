import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index' // ActionCreator

class SearchBar extends React.Component {
  constructor(props){
    super(props)
    this.state = { term: ''}; //initial component state in SearchBar component
    // 2. this.onInputChange = this.onInputChange.bind(this)
  }
  onInputChange = (event) => { //onxxxChange (event handler) always come along with 'event' object
    // console.log(event.target.value);// event.target.value is js syntax
    this.setState({ term: event.target.value }) /*這裡用this.setState會報錯，原因是this (SearchBar Component)在這裡面是不被認得的
    涉及1.callback function 後方加上bind(this)，
    2.或是在建構子中加入 this.callbackfunction= this.callbackfunction.bind(this)
    3.或是寫成arrow function: onChange={(event)=>this.onInputChange(event)}
    note: callback function: renew the previous state (e.g. setState)
    */
  }
  onSubmitChange = (event) => {
    event.preventDefault()//避免按下submit後送入後端（re-render）

    //we need to go and fetch weather data
    this.props.fetchWeather(this.state.term) //term from onInputChange
    this.setState({term:''})//reset term to the default value after calling the fetchWeather() from actions
  }
  render () {
    return(
      <form onSubmit={this.onSubmitChange} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
           />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-default">Submit</button>
        </span>
      </form>
    )
  }
}
// function mapStateToProps(state){
//   return{
//
//   }
// }
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar); /*merge redux and react*/

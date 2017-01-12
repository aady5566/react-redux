import React from 'react'
import TextField from 'material-ui/TextField';


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchData, getStockName, fetchGoogleLive } from '../actions/index' // ActionCreator

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

    //we need to go and fetch data
    this.props.fetchData(this.state.term) //term from onInputChange
    this.props.getStockName(this.state.term)
    // this.props.fetchGoogleLive()
    this.setState({term:''})//reset term to the default value after calling the fetchWeather() from actions
  }
  render () {
    return(
      <form onSubmit={this.onSubmitChange} className="input-group">
        <TextField className="text-field"
        hintText="例如：2885"
        floatingLabelText="輸入股票代碼並按「ENTER」送出"
        onChange={this.onInputChange}
        />
      </form>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchData, getStockName,fetchGoogleLive }, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar); /*merge redux and react*/

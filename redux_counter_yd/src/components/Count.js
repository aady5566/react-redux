import React,{ Component } from 'react';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, decrement } from './actions/index.js'

class Count extends Component{
  onClickDecrement = () => {
    this.props.decrement(this.props.count)
  }
  onClickIncrement = () => {
    this.props.increment(this.props.count)
  }
  render(){
    const { props: { count } } = this
    return(
      <div className="count">
        <input type="button" value="-" onClick={this.onClickDecrement}/>
          {count} {/*這邊會顯示預設值0*/}
        {/*<input type="button" value="+" onClick={this.increment}/>*/}
        <input type="button" value="+" onClick={this.onClickIncrement}/>
      </div>
    );
  }
}




// Input 我們的值
function mapStateToProps(state) {
  return {
    count: state.count
  };
}
// Output 我們的值
function mapDispatchToProps(dispatch) {
  return bindActionCreators({  increment, decrement }, dispatch);
}

//connect當前頁面(Count)
export default connect(mapStateToProps, mapDispatchToProps)(Count);

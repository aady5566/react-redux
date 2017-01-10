import React from 'react'
import { connect } from 'react-redux'

class StockList extends React.Component {
  getPriceVolume = (stocks)=>{
    console.log(stocks[0].split("TIMEZONE_OFFSET=480")[1]);
    return(
      stocks[0].split(" ").slice(7,11)
    )
  }
  render () {
    const { props: { stocks,stockName } } = this
    console.log(stockName);
    if(!stocks[0]){
      return(
        <div>
          Nothing Here Now..
        </div>
      )
    }
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Code</th>
            <th>Price</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {this.getPriceVolume(stocks)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ stocks,stockName }){  /*stock from reducers/index*/
  return { stocks, stockName } //equals to {stock: stock}
}

export default connect(mapStateToProps)(StockList); /*merge redux and react*/

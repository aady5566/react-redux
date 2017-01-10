import React from 'react'
import { connect } from 'react-redux'

class StockList extends React.Component {
  rederStockMapBefore = (obj) => {
    // console.log("obj",obj);
    const code = obj.split(";")[1]
    // console.log("code",code);
    if(!obj.split("TIMEZONE_OFFSET=480")[1]){
      return(
        <tr key={Math.random()}>
          <td>{code}</td>
          <td>NA</td>
          <td>NA</td>
        </tr>
      )
    }
    const info = obj.split("TIMEZONE_OFFSET=480")[1]
    // console.log("info",info);
    // console.log(info.split(/\n/).slice(1,5));
    const dataArray = info.split(/\n/).slice(4,5) //only get latest closed price
    // console.log(dataArray);
    const id = dataArray.map(obj => obj.split(",")[0])
    // console.log(id);
    const price = dataArray.map(obj => obj.split(",")[1])
    // console.log(price);
    const volume = dataArray.map(obj => obj.split(",")[2])
    // console.log(volume);
    return(
      <tr key={id+price+volume}>
        <td>{code}</td>
        <td>{price}</td>
        <td>{volume}</td>
      </tr>
    )
  }
  render () {
    const { props: { stocks,stockName } } = this
    // const data = [`${stocks};${stockName}`]
    // console.log(data);
    if(!(stocks.length===stockName.length)){
      return(
        <div>
          Nothing Here Now..
        </div>
      )
    }else{
      // console.log("strlength",stocks.length);
      // console.log("namelength",stockName.length);
      // console.log("stocks",stocks);
      let data = []
      for (let i = 0; i< stocks.length;i++){
        data[i] = `${stocks[i]};${stockName[i]}`
      }
      // console.log("data",data);
      // console.log(stocks);
      // console.log(stockName);
      // console.log(data.map(obj=>obj[0]));
      // console.log("data",data);
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
            {data.map(this.rederStockMapBefore)}
          </tbody>
        </table>
      )
    }
  }
}

function mapStateToProps({ stocks,stockName }){  /*stock from reducers/index*/
  return { stocks, stockName } //equals to {stock: stock}
}

export default connect(mapStateToProps)(StockList); /*merge redux and react*/

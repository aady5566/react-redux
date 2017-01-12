import React from 'react';
import {Card, CardTitle} from 'material-ui/Card';
import StockList from './StockList'

class CardWithList extends React.Component {
  render () {
    return(
    <Card expandable={true} className="card">
      <CardTitle title="History" subtitle="" className="card-title"/>
      <StockList />
    </Card>
    )
  }
}

export default CardWithList;

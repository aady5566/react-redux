import React from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import _ from 'lodash'
class Charts extends React.Component {
  avg = (data)=>{
    return _.round(_.sum(data)/data.length)
  }
  render () {
    const { props: { color , data, units } } = this
    return(
      <div>
        <Sparklines height={50} width={80} data={data}>
          <SparklinesLine color={color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{this.avg(data)} {units}</div>
      </div>
    )
  }
}

export default Charts;

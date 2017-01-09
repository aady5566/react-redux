import React from 'react'
import { connect } from 'react-redux'
import Chart from '../components/Chart'

class WeatherList extends React.Component {
  renderWeather = (obj) => {
    const temps = obj.list.map(weather => weather.main.temp)
    const pressures = obj.list.map(weather => weather.main.pressure)
    const humids = obj.list.map(weather => weather.main.humidity)
    const {lon,lat} = obj.city.coord
    console.log(lon);
    return(
      <tr key={obj.city.id}>
        <td>{obj.city.name}</td>
        <td><Chart data={temps} color="red" units="K"/></td>
        <td><Chart data={pressures} color="blue" units="hPa"/></td>
        <td><Chart data={humids} color="green" units="%"/></td>
      </tr>
    )
  }
  render () {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}


function mapStateToProps({ weather }){  /*weather from reducers/index*/
  return { weather } //equals to {weather: weather}
}

export default connect(mapStateToProps)(WeatherList); /*merge redux and react*/

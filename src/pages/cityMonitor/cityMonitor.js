import React, { Component } from 'react'
import axios from 'axios'

import CityMonitorMap from '../../components/Map/CityMonitorMap'

const CLIENT_ID = process.env.REACT_APP_CYCLE_IDENTIFIER

const segmentAnalyzerStyle = {
  width: '100%',
  height: '100%'
}

export default class CityMonitor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      stations: [],
      availability: []
    }
    this.getStations = this.getStations.bind(this)
    this.get_availability = this.getAvailability.bind(this)
  }

  componentDidMount () {
    this.getStations()
    this.getAvailability()
    setInterval(() => this.getAvailability(), 11000)
  }

  getStations () {
    const URL =
      'https://gbfs.urbansharing.com/trondheimbysykkel.no/station_information.json'

    axios
      .get(URL, { headers: { 'Client-Identifier': CLIENT_ID } })
      .then(res => {
        const stations = res.data.data.stations
        this.setState({ stations })
      })
      .catch(error => {
        console.log('error 3 ' + error)
      })
  }

  getAvailability () {
    const URL =
      'https://gbfs.urbansharing.com/trondheimbysykkel.no/station_status.json'

    axios
      .get(URL, { headers: { 'Client-Identifier': CLIENT_ID } })
      .then(res => {
        const availability = res.data.data.stations
        this.setState({ availability }, () => this.setStationStatus())
      })
      .catch(error => {
        console.log('error 3 ' + error)
      })
  }

  setStationStatus () {
    this.setState(prevState => {
      const stations = [...prevState.stations]

      this.state.availability.forEach(stationStatus => {
        const color =
          (100 * stationStatus.num_bikes_available) /
          stationStatus.num_docks_available
        const stationIndex = stations.findIndex(
          station => station.station_id === stationStatus.station_id
        )
        if (typeof stations[stationIndex] !== 'undefined') {
          stations[stationIndex].color = color
        }
      })

      return { stations }
    })
  }

  render () {
    return (
      <div id='cityMonitor' style={segmentAnalyzerStyle}>
        <CityMonitorMap stations={this.state.stations} />
      </div>
    )
  }
}

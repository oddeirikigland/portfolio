import React, { Component } from 'react'
import axios from 'axios'
import RingLoader from 'react-spinners/RingLoader'
import { css } from '@emotion/core'
import CityMonitorMap from '../../components/Map/CityMonitorMap'

const CLIENT_ID = process.env.REACT_APP_CYCLE_IDENTIFIER

const segmentAnalyzerStyle = {
  width: '100%',
  height: '100%'
}

const spinnerStyle = css`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  z-index: 99;
`

export default class CityMonitor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      stations: [],
      availability: []
    }
    this.getStations = this.getStations.bind(this)
    this.getAvailability = this.getAvailability.bind(this)
  }

  async componentDidMount () {
    this.setState({ loading: true })
    await this.getStations()
    await this.getAvailability()
    setInterval(() => this.getAvailability(), 11000)
  }

  async getStations () {
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

  async getAvailability () {
    this.setState({ loading: true })
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

      return { stations, loading: false }
    })
  }

  render () {
    return (
      <div id='cityMonitor' style={segmentAnalyzerStyle}>
        <RingLoader
          css={spinnerStyle}
          sizeUnit='px'
          size={150}
          color='#36D7B7'
          loading={this.state.loading}
        />
        <CityMonitorMap stations={this.state.stations} />
      </div>
    )
  }
}

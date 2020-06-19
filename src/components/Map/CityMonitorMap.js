import React, { Component } from 'react'
import Map from './Map'

import { Marker } from 'react-map-gl'
import SegmentPin from './segment-pin'
import { defaultMapStyle } from './map-style.js'

export default class CityMonitorMap extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mapStyle: defaultMapStyle
    }
  }

  render () {
    return (
      <Map mapStyle={this.state.mapStyle}>
        {this.props.stations.map((item, index) => (
          <Marker key={index} latitude={item.lat} longitude={item.lon}>
            <SegmentPin
              onClick={() => this.setState({ popupInfo: item })}
              colorPercent={item.color}
            />
          </Marker>
        ))}
      </Map>
    )
  }
}

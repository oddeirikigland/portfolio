import React, { Component } from "react";
import { render } from 'react-dom';
import ReactMapGL, { Marker, Popup, NavigationControl, FullscreenControl, GeolocateControl } from 'react-map-gl';
import { fromJS } from 'immutable';
import { json as requestJson } from 'd3-request';

import ControlPanel from './control-panel';
import SegmentPin from "./segment-pin";
import SegmentInfo from "./segment-info";
import { defaultMapStyle, dataLayer } from './map-style.js';

const fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const geolocateStyle = {
  position: 'absolute',
  top: 36,
  left: 0,
  margin: 10,
};

const navStyle = {
  position: 'absolute',
  top: 72,
  left: 0,
  padding: '10px'
};


export default  class Map extends Component {
  state = {
    viewport: {
      width: "100%",
      height: "100vh",
      latitude: 63,
      longitude: 10,
      zoom: 8
    },
    popupInfo: null,
    activityView: "All",
    mapStyle: defaultMapStyle,
    data: null
  };

  componentDidMount() {
    requestJson('https://segment-analyzer.herokuapp.com/map/countyNorway', (error, response) => {
      if (!error) {
        this._loadData(response);
      }
    });
  }

  _loadData = data => {
    const mapStyle = defaultMapStyle
      // Add geojson source to map
      .setIn(['sources', 'county'], fromJS({ type: 'geojson', data }))
      // Add point layer to map
      .set('layers', defaultMapStyle.get('layers').push(dataLayer));

    this.setState({ data, mapStyle });
  };

  _renderPopup() {
    const { popupInfo } = this.state;
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.start_longitude}
          latitude={popupInfo.start_latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <SegmentInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  updateSegmentView = activityType => {
    const activityView = activityType.type
    this.setState({ activityView })
  }

  filterSegments = segment => {
    if (this.state.activityView === "All") return true
    return this.state.activityView.valueOf() === segment.activity_type.valueOf()
  }
  

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapStyle={this.state.mapStyle}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {this.props.segments.filter(segment => this.filterSegments(segment)).map((item, index) => (
          <Marker key={index} latitude={item.start_latitude} longitude={item.start_longitude} offsetLeft={-20} offsetTop={-10}>
            <SegmentPin onClick={() => this.setState({ popupInfo: item })}/>
          </Marker>
        ))}

        {this._renderPopup()}

        <div className="fullscreen" style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>

        <GeolocateControl
          style={geolocateStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />

        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>

        <ControlPanel containerComponent={this.props.containerComponent} filterActivityType={this.updateSegmentView}/>
      </ReactMapGL>
    );
  }
}

export function renderToDom(container) {
  render(<Map />, container);
}
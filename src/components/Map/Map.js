import React, { Component } from "react";
import { render } from 'react-dom';
import ReactMapGL, { Marker, Popup, NavigationControl, FullscreenControl, GeolocateControl } from 'react-map-gl';

import ControlPanel from './control-panel';
import SegmentPin from "./segment-pin";
import SegmentInfo from "./segment-info";

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
    activityView: "All"
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
        mapStyle="mapbox://styles/mapbox/dark-v9"
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
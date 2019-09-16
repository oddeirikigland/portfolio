import React, { Component } from "react";
import { render } from 'react-dom';
import ReactMapGL, { Marker, Popup, NavigationControl, FullscreenControl } from 'react-map-gl';

import ControlPanel from './control-panel';
import SegmentPin from "./segment-pin";
import SegmentInfo from "./segment-info";

const fullscreenControlStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

const navStyle = {
  position: 'absolute',
  top: 36,
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
    popupInfo: null
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
  

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {this.props.segments.map((item, index) => (
          <Marker key={index} latitude={item.start_latitude} longitude={item.start_longitude} offsetLeft={-20} offsetTop={-10}>
            <SegmentPin onClick={() => this.setState({ popupInfo: item })}/>
          </Marker>
        ))}

        {this._renderPopup()}

        <div className="fullscreen" style={fullscreenControlStyle}>
          <FullscreenControl />
        </div>
        <div className="nav" style={navStyle}>
          <NavigationControl />
        </div>

        <ControlPanel containerComponent={this.props.containerComponent} />
      </ReactMapGL>
    );
  }
}

export function renderToDom(container) {
  render(<Map />, container);
}
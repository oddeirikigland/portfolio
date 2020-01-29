import React, { Component } from "react";
import { render } from "react-dom";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "100%",
        height: "100vh",
        latitude: 63.42957,
        longitude: 10.39844,
        zoom: 12
      }
    };
  }


  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapStyle={this.props.mapStyle}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onClick={this.props.onClick}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {this.props.children}
      </ReactMapGL>
    );
  }
}

export function renderToDom(container) {
  render(<Map />, container);
}

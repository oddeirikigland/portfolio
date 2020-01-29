import React, { Component } from "react";
import { render } from "react-dom";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
  LinearInterpolator
} from "react-map-gl";
import { fromJS } from "immutable";
import { json as requestJson } from "d3-request";
import WebMercatorViewport from "viewport-mercator-project";
import bbox from "@turf/bbox";
import "mapbox-gl/dist/mapbox-gl.css";

import ControlPanel from "./control-panel";
import SegmentPin from "./segment-pin";
import SegmentInfo from "./segment-info";
import { defaultMapStyle, dataLayer } from "./map-style.js";

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px"
};

const geolocateStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  margin: 10
};

const navStyle = {
  position: "absolute",
  top: 72,
  left: 0,
  padding: "10px"
};

export default class SegmentMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: "100%",
        height: "100vh",
        latitude: 65,
        longitude: 15,
        zoom: 3.5
      },
      popupInfo: null,
      activityView: "All",
      mapStyle: defaultMapStyle,
      data: null,
      segmentDistance: 5000,
      focusCountyNumber: 0,
      numberOfSegments: 100
    };
    this.onSliderChange = this.onSliderChange.bind(this);
    this.onAfterSliderChange = this.onAfterSliderChange.bind(this);
  }

  componentDidMount() {
    this.props.toogleLoading();
    requestJson(
      "https://segment-analyzer.herokuapp.com/map/countyNorway",
      (error, response) => {
        this.props.toogleLoading();
        if (!error) {
          this._loadData(response);
          this.segmentUpdate();
        }
      }
    );
  }

  _loadData = data => {
    const mapStyle = defaultMapStyle
      // Add geojson source to map
      .setIn(["sources", "county"], fromJS({ type: "geojson", data }))
      // Add point layer to map
      .set("layers", defaultMapStyle.get("layers").push(dataLayer));

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
    const activityView = activityType.type;
    this.setState({ activityView }, () => {
      this.segmentUpdate();
    });
  };

  segmentUpdate() {
    this.props.segmentApiUpdate(
      this.state.focusCountyNumber,
      this.state.segmentDistance,
      this.state.viewport.latitude,
      this.state.viewport.longitude,
      this.state.activityView,
      this.state.numberOfSegments
    );
  }

  onClickMap = event => {
    const feature = event.features[0];
    if (feature) {
      const focusCountyNumber = parseInt(feature.properties.fylkesnummer);
      // calculate the bounding box of the feature
      const [minLng, minLat, maxLng, maxLat] = bbox(feature);
      // construct a viewport instance from the current state
      const viewport = new WebMercatorViewport(this.state.viewport);
      const { longitude, latitude, zoom } = viewport.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat]
        ],
        {
          padding: 40
        }
      );

      this.setState({
        viewport: {
          ...this.state.viewport,
          longitude,
          latitude,
          zoom,
          transitionInterpolator: new LinearInterpolator({
            around: [event.offsetCenter.x, event.offsetCenter.y]
          }),
          transitionDuration: 1000
        },
        focusCountyNumber
      });
      this.segmentUpdate();
    }
  };

  onSliderChange = segmentDistance => {
    this.setState({
      segmentDistance
    });
  };

  onAfterSliderChange = () => {
    this.segmentUpdate();
  };

  onSliderChangeNumberSegments = numberOfSegments => {
    this.setState({
      numberOfSegments
    });
  };

  onAfterSliderChangeNumberSegments = () => {
    this.segmentUpdate();
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapStyle={this.state.mapStyle}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        onClick={this.onClickMap}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {this.props.segments.map((item, index) => (
          <Marker
            key={index}
            latitude={item.start_latitude}
            longitude={item.start_longitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <SegmentPin
              onClick={() => this.setState({ popupInfo: item })}
              colorPercent={item.color}
            />
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

        <ControlPanel
          containerComponent={this.props.containerComponent}
          filterActivityType={this.updateSegmentView}
          segmentDistance={this.state.segmentDistance}
          onSliderChange={this.onSliderChange}
          onAfterSliderChange={this.onAfterSliderChange}
          numberOfSegments={this.state.numberOfSegments}
          onSliderChangeNumberSegments={this.onSliderChangeNumberSegments}
          onAfterSliderChangeNumberSegments={
            this.onAfterSliderChangeNumberSegments
          }
        />
      </ReactMapGL>
    );
  }
}

export function renderToDom(container) {
  render(<SegmentMap />, container);
}

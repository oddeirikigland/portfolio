import React, { Component } from "react";
import axios from "axios";
import { css } from '@emotion/core';
import RingLoader from "react-spinners/RingLoader";

import Map from "../../components/Map/Map"

const segmentAnalyzerStyle = {
  width: "100%",
  height: "100%"
};

const spinnerStyle = css`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  z-index: 99;
`;

export default class SegmentAnalyzer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      segments: [],
      loading: true
    };
    this.get_segments = this.get_segments.bind(this);
    this.segmentApiUpdate = this.segmentApiUpdate.bind(this);
  }

  componentDidMount() {
    this.get_segments()
  }

  get_segments(countyNumber=0) {
    axios.get(`https://segment-analyzer.herokuapp.com/strava_segments?county_number=${countyNumber}`).then(res => {
      const segments = res.data
      const loading = false
      this.setState({ segments, loading });
    });
  }

  segmentApiUpdate(countyNumber) {
    this.get_segments(countyNumber)
  }  

  render() {
    return (
      <div id={"segmentAnalyzer"} style={segmentAnalyzerStyle}>
        <RingLoader
          css={spinnerStyle}
          sizeUnit={"px"}
          size={150}
          color={'#36D7B7'}
          loading={this.state.loading}
        />
        <Map segments={this.state.segments} segmentApiUpdate={this.segmentApiUpdate}/>
       
      </div>
    );
  }
}

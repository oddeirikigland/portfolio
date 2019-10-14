import React, { Component } from "react";
import axios from "axios";

import Map from "../../components/Map/Map"

const segmentAnalyzerStyle = {
  width: "100%",
  height: "100%"
};

export default class SegmentAnalyzer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      segments: []
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
      this.setState({ segments });
    });
  }

  segmentApiUpdate(countyNumber) {
    this.get_segments(countyNumber)
  }  

  render() {
    return (
      <div id={"segmentAnalyzer"} style={segmentAnalyzerStyle}>
        
        <Map segments={this.state.segments} segmentApiUpdate={this.segmentApiUpdate}/>
       
      </div>
    );
  }
}

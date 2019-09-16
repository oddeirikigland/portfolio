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
  }

  componentDidMount() {
    this.get_segments()
  }

  get_segments() {
    axios.get(`https://segment-analyzer.herokuapp.com/strava_segments`).then(res => {
      const segments = res.data
      this.setState({ segments });
    });
  }



  render() {
    return (
      <div id={"segmentAnalyzer"} style={segmentAnalyzerStyle}>
        
        <Map segments={this.state.segments}/>
       
      </div>
    );
  }
}

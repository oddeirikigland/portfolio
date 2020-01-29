import React, { Component } from "react";
import axios from "axios";

import CityMonitorMap from "../../components/Map/CityMonitorMap";

const CLIENT_ID = process.env.REACT_APP_CYCLE_IDENTIFIER;

const segmentAnalyzerStyle = {
  width: "100%",
  height: "100%"
};

export default class CityMonitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      stations: [],
      availability: []
    };
    this.get_stations = this.get_stations.bind(this);
    this.get_availability = this.get_availability.bind(this);
  }

  componentDidMount() {
    this.get_stations();
    this.get_availability();
    setInterval(() => this.get_availability(), 11000);
  }

  get_stations() {
    const URL =
      "https://gbfs.urbansharing.com/trondheimbysykkel.no/station_information.json";

    axios
      .get(URL, { headers: { "Client-Identifier": CLIENT_ID } })
      .then(res => {
        const stations = res.data.data.stations;
        this.setState({ stations });
      })
      .catch(error => {
        console.log("error 3 " + error);
      });
  }

  get_availability() {
    const URL =
      "https://gbfs.urbansharing.com/trondheimbysykkel.no/station_status.json";

    axios
      .get(URL, { headers: { "Client-Identifier": CLIENT_ID } })
      .then(res => {
        const availability = res.data.data.stations;
        this.setState({ availability }, () => this.set_station_status());
      })
      .catch(error => {
        console.log("error 3 " + error);
      });
  }

  set_station_status() {
    this.setState(prevState => {
      const stations = [...prevState.stations];

      this.state.availability.forEach(station_status => {
        const color =
          (100 * station_status.num_bikes_available) /
          station_status.num_docks_available;
        const station_index = stations.findIndex(
          station => station.station_id === station_status.station_id
        );
        if (typeof stations[station_index] !== "undefined") {
          stations[station_index].color = color;
        }
      });

      return { stations };
    });
  }

  render() {
    return (
      <div id={"cityMonitor"} style={segmentAnalyzerStyle}>
        <CityMonitorMap stations={this.state.stations} />
      </div>
    );
  }
}

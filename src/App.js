import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SegmentAnalyzer from "./pages/segmentAnalyzer/SegmentAnalyzer";
import Form from "./pages/form/form";
import Animation from "./pages/animation/animation";
import CityMonitor from "./pages/cityMonitor/cityMonitor";

const fouroffour = () => (
  <div
    style={{
      position: "absolute",
      width: "100%",
      top: "50%",
      textAlign: "center"
    }}
  >
    Siden du ser etter finnes ikke.
  </div>
);

export default class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/strava"} component={SegmentAnalyzer} />
          <Route path={"/form"} component={Form} />
          <Route path={"/animation"} component={Animation} />
          <Route path={"/city"} component={CityMonitor} />
          <Route component={fouroffour} />
        </Switch>
      </BrowserRouter>
    );
  }
}

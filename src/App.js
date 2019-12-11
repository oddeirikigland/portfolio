import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SegmentAnalyzer from "./pages/segmentAnalyzer/SegmentAnalyzer";
import Form from "./pages/form/form";
import Animation from "./pages/animation/animation";

const fouroffour = () => (
  <div
    style={{
      position: 'absolute',
      width: '100%',
      top: '50%',
      textAlign: 'center',
    }}
  >
    Siden du ser etter finnes ikke.
  </div>
);

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/strava'} component={SegmentAnalyzer} />
          <Route exact path={'/form'} component={Form} />
          <Route exact path={'/animation'} component={Animation} />
          <Route component={fouroffour} />
        </Switch>
      </BrowserRouter>
    );
  }
}

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";

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
          <Route component={fouroffour} />
        </Switch>
      </BrowserRouter>
    );
  }
}

import React, { Component } from "react";
import Icons from "../../components/Icons/Icons";
import Navigationbar from "../Navigationbar/Navigationbar";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div id={"home"}>
        <Navigationbar />
        <div id={"container"}>
          <Icons />
        </div>
      </div>
    );
  }
}

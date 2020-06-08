import React, { Component } from "react";
import Icons from "../../components/Icons/Icons";
import "./Home.css";
import CardComp from "../cards/CardComp";
import { Grid, Cell } from "styled-css-grid";

const projects = [
  {
    title: "Segment Map",
    text: "Shows information about Strava segments in a map.",
    link: "strava"
  },
  {
    title: "Segment Table",
    text:
      "The user logs in to Strava. The table contains the logged in users segment efforts on the last activities. Sorts the segments after their difficulty to get the KOM.",
    link: "strava_table"
  },
  {
    title: "City bike",
    text:
      "Shows available city bikes in Trondheim. Green pin means many bikes, while red means few available bikes. Realtime data.",
    link: "city"
  },
  {
    title: "Smart Display for Homes",
    text:
      "It is intended to be non portable and placed e.g. in the hall. The need of easy accessible information is convenient in a busy everyday life. The display is a enhanced version of a notice board that changes according to who is looking at it.",
    link: "ambient"
  }, {
    title: "Restarts in Julia",
    text: "Handling of exceptional situations in Julia, including use of restarts. This is the documentation for the project.",
    link: "restart_in_julia",
  }, {
    title: "Regression modelling",
    text: "The main purpose of this project is to predict how many people that will come to work at Telenor Fornebu, for up to x into the future.",
    link: "pred_telenor",
  }
];

export default class Home extends Component {
  render() {
    return (
      <div id={"home"}>
        <div id={"container"}>
          <header>Welcome to my site!</header>
          <p>Check out my projects below</p>
          <Icons />
        </div>
        <div id={"grid"}>
          <Grid
            columns="repeat(auto-fit, minmax(120px, 286px))"
            minRowHeight="45px"
          >
            {projects.map(project => (
              <Cell key={project.link}>
                <CardComp
                  title={project.title}
                  text={project.text}
                  link={project.link}
                />
              </Cell>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

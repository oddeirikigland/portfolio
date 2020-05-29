import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default class Navigationbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to="/">Portfolio</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/strava">Segment Analyzer</Link></Nav.Link>
            <Nav.Link><Link to="/city">Available City bikes</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

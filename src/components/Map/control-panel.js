import React, { PureComponent } from 'react';

import "./control-panel.css"


const defaultContainer = ({ children }) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {
  render() {
    const Container = this.props.containerComponent || defaultContainer;

    return (
      <Container>
        <h3>Segments </h3>
        <p>
          Map showing segments in area
        </p>
      </Container>
    );
  }
}
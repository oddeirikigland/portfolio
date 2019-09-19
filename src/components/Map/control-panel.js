import React, { PureComponent } from 'react';

import "./control-panel.css"


const defaultContainer = ({ children }) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activity: [{type: "All"}, {type: "Run"}, {type: "Ride"}]
    };
  }
  _renderButton = (activity, index) => {
    return (
      <div key={`btn-${index}`} className="input">
        <input
          type="radio"
          name="activity"  
          id={`activity-${index}`}
          defaultChecked={activity.type === 'All'}
          onClick={() => this.props.filterActivityType(activity)}
        />
        <label htmlFor={`city-${index}`}>{activity.type}</label>
      </div>
    );
  };

  render() {
    const Container = this.props.containerComponent || defaultContainer;

    return (
      <Container>
        <h3>Segments </h3>
        <p>
          Map showing segments in area
        </p>
        <p>Filter segment on type of sport</p>
        {this.state.activity.map(this._renderButton)}
      </Container>
    );
  }
}
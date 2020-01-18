import React, { PureComponent } from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';

import "./control-panel.css"
import 'rc-slider/assets/index.css';


const defaultContainer = ({ children }) => <div className="control-panel">{children}</div>;
const SliderWithTooltip = createSliderWithTooltip(Slider)

function distanceFormatter(v) {
  return `${v} km`;
}

function percentFormatter(v) {
  return `${v} %`;
}

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
        <h6>FIND EASISEST SEGMENTS AND GO FOR KOM</h6>
        They're ranked from green to red. Press a county to zoom in.
        <p>Filter segment on type of sport</p>
        {this.state.activity.map(this._renderButton)}

        Shows segments in {`${this.props.segmentDistance}`} km from where you click
        <SliderWithTooltip
          value={this.props.segmentDistance}
          onChange={this.props.onSliderChange}
          onAfterChange={this.props.onAfterSliderChange}
          tipFormatter={distanceFormatter}
          min={2}
          max={10000}
        />
        Showing {`${this.props.numberOfSegments}`} % of the relevant segments
        <SliderWithTooltip
          value={this.props.numberOfSegments}
          onChange={this.props.onSliderChangeNumberSegments}
          onAfterChange={this.props.onAfterSliderChangeNumberSegments}
          tipFormatter={percentFormatter}
          min={1}
          max={100}
        />
      </Container>
    );
  }
}
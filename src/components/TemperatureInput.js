import React, { Component } from "react";

export default class TemperatureInput extends Component {
  scales = { c: "Celcious", f: "Farenhite" };
  state = { temperature: "" };

  temperatureHandleChange(e) {
    this.setState({
      temperature: e.target.value,
    });
    this.props.changeHandler(e.target.value);
  }
  render() {
    const { scale } = this.props;
    const { temperature } = this.state;
    return (
      <>
        <h4>
          Input temperature on {this.scales[scale]} :
          <input
            type="number"
            value={temperature}
            onChange={(e) => this.temperatureHandleChange(e)}
          />
        </h4>
      </>
    );
  }
}

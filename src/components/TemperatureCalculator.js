import React, { Component } from "react";
import TemperatureInput from "./TemperatureInput";
export default class TemperatureCalculator extends Component {
  state = { temperature: "" };
  temperatureChangeHandler(value) {
    this.setState({ temperature: value });
  }
  render() {
    const { temperature } = this.state;
    const boilingVerdict =
      temperature > 99 ? "water will boil" : "water would not boil";
    return (
      <>
        <h1>Temperature Calculator</h1>
        <TemperatureInput
          scale="c"
          changeHandler={this.temperatureChangeHandler}
        />

        <TemperatureInput
          scale="f"
          changeHandler={this.temperatureChangeHandler}
        />

        {boilingVerdict}
      </>
    );
  }
}

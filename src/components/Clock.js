import React, { Component } from "react";

export default class Clock extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = { date: new Date() };
  //   }
  state = { date: new Date() };
  componentDidMount() {
    this.clockInterval = setInterval(() => this.timing(), 1000);
  }
  timing() {
    this.setState({ date: new Date() });
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }
  render() {
    return (
      <h1>
        Time:
        <span>{this.state.date.toLocaleTimeString(this.props.locale)}</span>
      </h1>
    );
  }
}

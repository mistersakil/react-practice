import React from "react";

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
      local: "bn-BD",
      country: this.props.country,
    };
  }

  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({
        currentTime: new Date(),
      });
    }, 1000);
  }

  changeLocal({ local, country }) {
    this.setState({
      local,
      country,
    });
  }

  render() {
    console.log("rendered event class");
    const { currentTime, local, country } = this.state;

    return (
      <>
        <h1>
          current time in {country} = {currentTime.toLocaleTimeString(local)}
        </h1>
        <button
          onClick={() => this.changeLocal({ local: "en-US", country: "US" })}
        >
          Show US Time
        </button>
      </>
    );
  }
}

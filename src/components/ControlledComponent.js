import React, { Component } from "react";

export default class ControlledComponent extends Component {
  state = { name: "" };
  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>Controlled Component</h1>
        <form>
          <input type="text" value={name} />
        </form>
      </div>
    );
  }
}

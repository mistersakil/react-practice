import React, { Component } from "react";
import "../css/ControlledComponent.css";
export default class ControlledComponent extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
    country: "",
    skills: [],
    bio: "",
  };
  inputChangeHander = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { name, email, password, mobile, gender, bio, country, skills } =
      this.state;
    return (
      <div>
        <h1>Controlled Component</h1>
        <form>
          <div className="row">
            <label>Text field: </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => this.inputChangeHander(e)}
            />
          </div>
          <div className="row">
            <label>Password </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => this.inputChangeHander(e)}
            />
          </div>
          <div className="row">
            <label>email </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => this.inputChangeHander(e)}
            />
          </div>
          <div className="row">
            <label>number </label>
            <input
              type="number"
              name="mobile"
              value={mobile}
              onChange={(e) => this.inputChangeHander(e)}
            />
          </div>
          <div className="row">
            <label>radio </label>
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={(e) => this.inputChangeHander(e)}
            />
          </div>
          <div className="row">
            <label>trextarea </label>
            <textarea
              name="bio"
              value={bio}
              onChange={(e) => this.inputChangeHander(e)}
            ></textarea>
          </div>
        </form>
      </div>
    );
  }
}

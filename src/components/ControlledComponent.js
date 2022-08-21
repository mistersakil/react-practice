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
    result: false,
  };
  inputChangeHander = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      result: false,
    });
  };
  formSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({ result: true });
  };
  render() {
    const {
      name,
      email,
      password,
      mobile,
      gender,
      bio,
      country,
      skills,
      result,
    } = this.state;
    return (
      <div>
        <h1>Controlled Component</h1>
        <form onSubmit={(e) => this.formSubmitHandler(e)}>
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
          <div className="row">
            <label>submit </label>
            <input type="submit" name="submit" value="submit" />
          </div>
          <div className="row">
            <label>result </label>
            {result && <h2>{`${name} ${email} ${mobile}`} </h2>}
          </div>
        </form>
      </div>
    );
  }
}

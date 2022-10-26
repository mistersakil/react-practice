import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FormInput from "./FormInput";

let inputArr = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Full Name",
    label: "Full Name",
  },
  {
    id: 2,
    name: "email",
    type: "text",
    placeholder: "Email",
    label: "Email",
  },
  {
    id: 3,
    name: "mobile",
    type: "number",
    placeholder: "Mobile Number",
    label: "Mobile Number",
  },
  {
    id: 4,
    name: "password",
    type: "text",
    placeholder: "Password",
    label: "Password",
  },
];
const RegistrationForm = () => {
  /**
   * Initial Value
   * @type {{ name: string, email: string, mobile: number, password: string}}
   */
  const initialValue = {
    name: "",
    email: "",
    mobile: "",
    password: "",
  };
  const [values, setValues] = useState(initialValue);
  /**
   * Handle change
   * @param {Object} event
   * @returns {Object} setValues
   */
  function handleChange(event) {
    setValues((preValues) => {
      return { ...preValues, [event.target.name]: event.target.value };
    });
  }
  /**
   * Handle submit
   * @param {Object} event
   * @returns {null} null
   */
  function handleSubmit(event) {
    event.preventDefault();
    console.log(values);
  }
  /**
   * Handle reset
   * @param {Object} event
   * @returns {null} null
   */
  function handleReset(event) {
    setValues((preValues) => {
      return initialValue;
    });
  }
  /**
   * Use effect
   * @returns {null} null
   */
  useEffect(() => {
    console.log(values);
  }, []);
  return (
    <div className="registrationForm">
      <h1>Registration Form</h1>
      {inputArr.map((inputItem) => {
        return (
          <FormInput
            key={inputItem.id}
            {...inputItem}
            value={values[inputItem.name]}
            handleChange={handleChange}
          />
        );
      })}
      <div className="btnGroup">
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <button type="button" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;

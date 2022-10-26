import React from "react";
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
  const initialValue = {
    name: "",
    email: "",
    mobile: "",
    password: "",
  };
  const [values, setValues] = useState(initialValue);
  return (
    <div className="registrationForm">
      <h1>Registration Form</h1>
      {inputArr.map((inputItem) => {
        return (
          <FormInput
            key={inputItem.id}
            {...inputItem}
            value={values[inputItem.name]}
          />
        );
      })}
    </div>
  );
};

export default RegistrationForm;

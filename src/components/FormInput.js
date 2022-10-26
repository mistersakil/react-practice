import React from "react";
import "./FormInput.css";
const FormInput = ({ name, type, placeholder, value, label }) => {
  return (
    <div className="formInput">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        readOnly
      />
    </div>
  );
};

export default FormInput;

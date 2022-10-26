import React from "react";
import "./FormInput.css";
const FormInput = ({ name, type, placeholder, value, label, handleChange }) => {
  return (
    <div className="formInput">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;

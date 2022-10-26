import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="app">
    <RegistrationForm />
  </div>
);

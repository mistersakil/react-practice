import React from "react";
import ReactDOM from "react-dom/client";

import Clock from "./components/Clock";
import One from "./components/One";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Clock locale="bn-BD" />
    <One />
    <One />
  </>
);

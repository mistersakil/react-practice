import React from "react";
import ReactDOM from "react-dom/client";

import Clock from "./components/Clock";
import One from "./components/One";
import Events from "./components/Events";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Events country="Bangladesh" />
  </>
);

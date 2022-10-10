import { memo } from "react";

const ButtonCount = ({ children, increment }) => {
  console.log("button count");
  return (
    <button type="button" onClick={increment}>
      {children}
    </button>
  );
};

export default memo(ButtonCount);

import { forwardRef } from "react";

const Input = ({ type, placeholder }, reference) => {
  return (
    <>
      <strong>forwarding ref</strong>
      &nbsp;
      <input type={type} placeholder={placeholder} ref={reference} />
    </>
  );
};

let forwardedInput = forwardRef(Input);

export default forwardedInput;

import { useEffect, useRef } from "react";
import Input from "./Input";
const UseRefHooke = () => {
  const inputRef = useRef(null);
  useEffect(function () {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h1>useRef hook practice</h1>
      <Input type="text" placeholder="type something" ref={inputRef} />
    </div>
  );
};

export default UseRefHooke;

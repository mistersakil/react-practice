import { useEffect, useRef } from "react";

const UseRefHooke = () => {
  const inputRef = useRef(null);
  useEffect(function () {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h1>useRef hook practice</h1>
      Type something:
      <input type="text" placeholder="type something" ref={inputRef} />
    </div>
  );
};

export default UseRefHooke;

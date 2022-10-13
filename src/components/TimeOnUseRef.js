import React, { useEffect, useRef, useState } from "react";

const TimeOnUseRef = () => {
  const [date, setDate] = useState(new Date());
  const btnRef = useRef();
  const tick = () => {
    setDate(new Date());
  };

  useEffect(function () {
    btnRef.current = setInterval(tick, 1000);

    return () => {
      clearInterval(btnRef.current);
    };
  }, []);
  return (
    <div>
      <h2>useRef hook on time ticker</h2>
      my clock : {date.toLocaleTimeString()}
      <br />
      <button onClick={() => clearInterval(btnRef.current)}>Stop Timer</button>
    </div>
  );
};

export default TimeOnUseRef;
